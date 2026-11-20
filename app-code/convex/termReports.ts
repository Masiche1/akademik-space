import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import type { Doc } from "./_generated/dataModel.d.ts";
import { TERM_REPORT_KIND } from "./schema.ts";
import { MAX_COURSES_PER_CLASS, MAX_STUDENTS_PER_CLASS, fail, requireEditableClass, userNames, viewableClass } from "./lib/teach.ts";
import { MAX_ASSIGNMENTS_PER_CLASS, isClosed } from "./lib/assignments.ts";
import { MAX_COMMENTS_PER_REPORT, MAX_TERM_REPORTS_PER_CLASS, deleteTermReport, inTerm, validateComment, validateTerm } from "./lib/termReports.ts";
import { MAX_QUESTIONS_PER_COURSE, conceptTotals } from "./teachReports.ts";

/** A report covers at most this many sets, newest first, so one student's report stays a bounded read. */
const MAX_TERM_SETS = 40;

const termArgs = {
  title: v.string(),
  kind: TERM_REPORT_KIND,
  startDate: v.string(),
  endDate: v.string(),
  startsAt: v.string(),
  endsAt: v.string(),
};

/** A class's term reports, newest first. Null when the class is not visible. */
export const list = query({
  args: { classId: v.id("classes") },
  handler: async (ctx, args) => {
    const view = await viewableClass(ctx, args.classId);
    if (!view) return null;
    const reports = await ctx.db.query("termReports").withIndex("by_class", (q) => q.eq("classId", args.classId)).order("desc").take(MAX_TERM_REPORTS_PER_CLASS);
    return {
      canEdit: view.canEdit,
      reports: reports.map((r) => ({ _id: r._id, title: r.title, kind: r.kind, startDate: r.startDate, endDate: r.endDate, createdAt: r.createdAt })),
    };
  },
});

/** One report with the class roster and each student's comment. Null when missing or not visible. */
export const get = query({
  args: { reportId: v.string() },
  handler: async (ctx, args) => {
    const reportId = ctx.db.normalizeId("termReports", args.reportId);
    if (!reportId) return null;
    const report = await ctx.db.get("termReports", reportId);
    if (!report) return null;
    const view = await viewableClass(ctx, report.classId);
    if (!view) return null;
    const [members, comments] = await Promise.all([
      ctx.db.query("classMembers").withIndex("by_class", (q) => q.eq("classId", report.classId)).take(MAX_STUDENTS_PER_CLASS),
      ctx.db.query("termReportComments").withIndex("by_report_and_user", (q) => q.eq("reportId", reportId)).take(MAX_COMMENTS_PER_REPORT),
    ]);
    const names = await userNames(ctx, members.map((m) => m.userId));
    const byUser = new Map(comments.map((c) => [c.userId, c]));
    const students = members
      .map((m) => ({ userId: m.userId, name: names.get(m.userId)?.name ?? "Unnamed learner", comment: byUser.get(m.userId)?.comment ?? "" }))
      .sort((a, b) => a.name.localeCompare(b.name));
    return {
      _id: report._id,
      title: report.title,
      kind: report.kind,
      startDate: report.startDate,
      endDate: report.endDate,
      classId: view.cls._id,
      className: view.cls.name,
      orgId: view.cls.orgId,
      orgName: view.org.name,
      canEdit: view.canEdit,
      students,
    };
  },
});

/** Everything that goes on one student's printed report. Null when not visible or the student left the class. */
export const student = query({
  args: { reportId: v.id("termReports"), userId: v.id("users") },
  handler: async (ctx, args) => {
    const report = await ctx.db.get("termReports", args.reportId);
    if (!report) return null;
    const view = await viewableClass(ctx, report.classId);
    if (!view) return null;
    const seat = await ctx.db.query("classMembers").withIndex("by_class_and_user", (q) => q.eq("classId", report.classId).eq("userId", args.userId)).unique();
    if (!seat) return null;

    const [courses, sets, comment, names] = await Promise.all([
      ctx.db.query("classCourses").withIndex("by_class", (q) => q.eq("classId", report.classId)).take(MAX_COURSES_PER_CLASS),
      ctx.db.query("assignments").withIndex("by_class", (q) => q.eq("classId", report.classId)).order("desc").take(MAX_ASSIGNMENTS_PER_CLASS),
      ctx.db.query("termReportComments").withIndex("by_report_and_user", (q) => q.eq("reportId", report._id).eq("userId", args.userId)).unique(),
      userNames(ctx, [args.userId, view.cls.teacherId]),
    ]);

    const courseRows = await Promise.all(courses.map(async (c) => {
      const rows = await ctx.db
        .query("questionProgress")
        .withIndex("by_user_and_course", (q) => q.eq("userId", args.userId).eq("courseId", c.courseId))
        .take(MAX_QUESTIONS_PER_COURSE);
      return { courseId: c.courseId, concepts: conceptTotals(rows), practisedInTerm: rows.filter((r) => inTerm(r.lastAttemptAt, report)).length };
    }));

    const now = Date.now();
    const termSets = sets.filter((a) => inTerm(a.createdAt, report)).slice(0, MAX_TERM_SETS);
    const setRows = await Promise.all(termSets.map(async (a) => {
      const sub = await ctx.db.query("assignmentSubmissions").withIndex("by_assignment_and_user", (q) => q.eq("assignmentId", a._id).eq("userId", args.userId)).unique();
      return { title: a.title, kind: a.kind, createdAt: a.createdAt, totalMarks: a.totalMarks, ...sittingResult(sub, a, now) };
    }));

    return {
      title: report.title,
      kind: report.kind,
      startDate: report.startDate,
      endDate: report.endDate,
      className: view.cls.name,
      orgName: view.org.name,
      teacherName: names.get(view.cls.teacherId)?.name ?? "",
      studentName: names.get(args.userId)?.name ?? "Unnamed learner",
      comment: comment?.comment ?? "",
      courses: courseRows,
      // Oldest first, as a term reads.
      sets: setRows.reverse(),
    };
  },
});

type SittingResult = { status: "marked" | "marking" | "in-progress" | "not-done"; marks: number | null };

/** Scores show only once a sitting closes, matching what the student sees. */
export function sittingResult(
  sub: Pick<Doc<"assignmentSubmissions">, "submittedAt" | "deadlineAt" | "marks" | "pendingCount"> | null,
  a: Pick<Doc<"assignments">, "dueAt">,
  now: number,
): SittingResult {
  if (!sub) return { status: a.dueAt && Date.parse(a.dueAt) < now ? "not-done" : "in-progress", marks: null };
  if (!isClosed(sub, now)) return { status: "in-progress", marks: null };
  return { status: sub.pendingCount > 0 ? "marking" : "marked", marks: sub.marks };
}

export const create = mutation({
  args: { classId: v.id("classes"), ...termArgs },
  handler: async (ctx, args) => {
    const { cls, user } = await requireEditableClass(ctx, args.classId);
    const title = validateTerm(args);
    const existing = await ctx.db.query("termReports").withIndex("by_class", (q) => q.eq("classId", cls._id)).take(MAX_TERM_REPORTS_PER_CLASS);
    if (existing.length >= MAX_TERM_REPORTS_PER_CLASS) throw fail("BAD_REQUEST", `A class can have up to ${MAX_TERM_REPORTS_PER_CLASS} term reports. Delete an old one first.`);
    return await ctx.db.insert("termReports", {
      orgId: cls.orgId,
      classId: cls._id,
      createdBy: user._id,
      title,
      kind: args.kind,
      startDate: args.startDate,
      endDate: args.endDate,
      startsAt: new Date(args.startsAt).toISOString(),
      endsAt: new Date(args.endsAt).toISOString(),
      createdAt: new Date().toISOString(),
    });
  },
});

export const remove = mutation({
  args: { reportId: v.id("termReports") },
  handler: async (ctx, args) => {
    const report = await ctx.db.get("termReports", args.reportId);
    if (!report) throw fail("NOT_FOUND", "Report not found");
    await requireEditableClass(ctx, report.classId);
    await deleteTermReport(ctx, report._id);
    return null;
  },
});

/** Saves the teacher's comment for one student. An empty comment deletes it. */
export const saveComment = mutation({
  args: { reportId: v.id("termReports"), userId: v.id("users"), comment: v.string() },
  handler: async (ctx, args) => {
    const report = await ctx.db.get("termReports", args.reportId);
    if (!report) throw fail("NOT_FOUND", "Report not found");
    await requireEditableClass(ctx, report.classId);
    const comment = validateComment(args.comment);
    const seat = await ctx.db.query("classMembers").withIndex("by_class_and_user", (q) => q.eq("classId", report.classId).eq("userId", args.userId)).unique();
    if (!seat) throw fail("BAD_REQUEST", "That student is not in this class");
    const existing = await ctx.db.query("termReportComments").withIndex("by_report_and_user", (q) => q.eq("reportId", report._id).eq("userId", args.userId)).unique();
    const updatedAt = new Date().toISOString();
    if (existing && comment === "") await ctx.db.delete("termReportComments", existing._id);
    else if (existing) await ctx.db.patch("termReportComments", existing._id, { comment, updatedAt });
    else if (comment !== "") await ctx.db.insert("termReportComments", { reportId: report._id, userId: args.userId, comment, updatedAt });
    return null;
  },
});
