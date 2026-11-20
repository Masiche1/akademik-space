import { ConvexError, v } from "convex/values";
import { paginationOptsValidator } from "convex/server";
import { mutation, query } from "../_generated/server";
import { REPORT_STATUS } from "../schema.ts";
import { MAX_OPEN_REPORTS, requireAdmin, validateReviewNote } from "../lib/admin.ts";
import { userNames } from "../lib/teach.ts";
import { logAudit, who } from "../lib/audit.ts";
import { COURSES, getQuestion, plainPreview } from "../../src/content/catalog.ts";

const fail = (code: string, message: string) => new ConvexError({ code, message });
const MAX_RELATED = 20;

/** Where a reported question sits in the catalog, or null if it has been removed. */
function locate(questionId: string) {
  const loc = getQuestion(questionId);
  if (!loc) return null;
  return {
    courseId: loc.course.id,
    courseTitle: loc.course.title,
    unitTitle: loc.unit.title,
    lessonTitle: loc.lesson.title,
    conceptTitle: loc.concept.title,
    preview: plainPreview(loc.question.stem, 160),
    totalMarks: loc.question.totalMarks,
  };
}

/** Question reports by status, newest first. */
export const reports = query({
  args: { status: REPORT_STATUS, paginationOpts: paginationOptsValidator },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const result = await ctx.db.query("questionReports").withIndex("by_status", (q) => q.eq("status", args.status)).order("desc").paginate(args.paginationOpts);
    const people = await userNames(ctx, result.page.flatMap((r) => [r.reporterId, r.reviewedBy].filter((id) => id !== undefined)));
    return {
      ...result,
      page: result.page.map((r) => ({
        reportId: r._id,
        questionId: r.questionId,
        reason: r.reason,
        details: r.details,
        status: r.status,
        reportedAt: new Date(r._creationTime).toISOString(),
        reporter: r.reporterId ? (people.get(r.reporterId)?.name ?? "Unknown") : null,
        reviewer: r.reviewedBy ? (people.get(r.reviewedBy)?.name ?? "Unknown") : null,
        reviewedAt: r.reviewedAt ?? null,
        reviewNote: r.reviewNote ?? null,
        question: locate(r.questionId),
      })),
    };
  },
});

/** Open reports grouped by course, so reviewers can see where problems cluster. */
export const openByCourse = query({
  args: {},
  handler: async (ctx) => {
    await requireAdmin(ctx);
    const open = await ctx.db.query("questionReports").withIndex("by_status", (q) => q.eq("status", "open")).take(MAX_OPEN_REPORTS + 1);
    const counts = new Map<string, number>();
    let unknown = 0;
    for (const r of open.slice(0, MAX_OPEN_REPORTS)) {
      const courseId = getQuestion(r.questionId)?.course.id;
      if (courseId) counts.set(courseId, (counts.get(courseId) ?? 0) + 1);
      else unknown++;
    }
    return {
      capped: open.length > MAX_OPEN_REPORTS,
      unknown,
      courses: COURSES.filter((c) => counts.has(c.id))
        .map((c) => ({ courseId: c.id, title: c.title, open: counts.get(c.id) ?? 0 }))
        .sort((a, b) => b.open - a.open),
    };
  },
});

/** Resolves, dismisses or reopens one report. Resolving can close every open report on the same question. */
export const review = mutation({
  args: { reportId: v.id("questionReports"), status: REPORT_STATUS, note: v.optional(v.string()), applyToQuestion: v.optional(v.boolean()) },
  handler: async (ctx, args) => {
    const admin = await requireAdmin(ctx);
    const report = await ctx.db.get("questionReports", args.reportId);
    if (!report) throw fail("NOT_FOUND", "Report not found");
    const note = validateReviewNote(args.note);
    const patch = args.status === "open"
      ? { status: args.status, reviewedBy: undefined, reviewedAt: undefined, reviewNote: undefined }
      : { status: args.status, reviewedBy: admin._id, reviewedAt: new Date().toISOString(), reviewNote: note };
    await ctx.db.patch("questionReports", report._id, patch);
    let also = 0;
    if (args.applyToQuestion && args.status !== "open") {
      const related = await ctx.db.query("questionReports")
        .withIndex("by_question_and_status", (q) => q.eq("questionId", report.questionId).eq("status", "open"))
        .take(MAX_RELATED);
      for (const r of related) {
        await ctx.db.patch("questionReports", r._id, patch);
        also++;
      }
    }
    const label = args.status === "open" ? "reopened" : args.status;
    const where = getQuestion(report.questionId)?.course.title;
    await logAudit(ctx, {
      action: "report_reviewed",
      actorId: admin._id,
      summary: `${who(admin)} ${label} a report on question ${report.questionId}${where ? ` (${where})` : ""}${also > 0 ? ` and ${also} more on the same question` : ""}`,
    });
    return { also };
  },
});

/** How many other open reports a question has, shown before resolving. */
export const openForQuestion = query({
  args: { questionId: v.string() },
  handler: async (ctx, args) => {
    await requireAdmin(ctx);
    const rows = await ctx.db.query("questionReports")
      .withIndex("by_question_and_status", (q) => q.eq("questionId", args.questionId).eq("status", "open"))
      .take(MAX_RELATED + 1);
    return rows.length;
  },
});
