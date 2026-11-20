import { v } from "convex/values";
import { query } from "./_generated/server";
import type { Doc, Id } from "./_generated/dataModel.d.ts";
import { MAX_CLASSES_PER_STUDENT, MAX_STUDENTS_PER_CLASS, canViewLearner, checkCourseId, staffAccess, userNames, viewableClass } from "./lib/teach.ts";
import { MAX_SET_QUESTIONS, isClosed } from "./lib/assignments.ts";
import { canManage } from "./lib/orgs.ts";

/** The largest course has under 200 questions, so this reads every saved question a student has in it. */
export const MAX_QUESTIONS_PER_COURSE = 250;
/** Class reports summarise the most recent sets only, so reads stay bounded. */
export const REPORT_SETS = 20;
const LEARNER_SITTINGS = 100;

type ConceptTotals = { conceptId: string; earned: number; attempted: number };

/** Per-concept best marks for every student in a class on one course. Null when the class is not visible. */
export const classCourse = query({
  args: { classId: v.id("classes"), courseId: v.string() },
  handler: async (ctx, args) => {
    checkCourseId(args.courseId);
    const view = await viewableClass(ctx, args.classId);
    if (!view) return null;
    const members = await ctx.db.query("classMembers").withIndex("by_class", (q) => q.eq("classId", args.classId)).take(MAX_STUDENTS_PER_CLASS);
    const names = await userNames(ctx, members.map((m) => m.userId));
    const students = await Promise.all(members.map(async (m) => {
      const rows = await ctx.db
        .query("questionProgress")
        .withIndex("by_user_and_course", (q) => q.eq("userId", m.userId).eq("courseId", args.courseId))
        .take(MAX_QUESTIONS_PER_COURSE);
      return { userId: m.userId, name: names.get(m.userId)?.name ?? "Unnamed learner", concepts: conceptTotals(rows), lastAttemptAt: latest(rows) };
    }));
    return { className: view.cls.name, orgId: view.cls.orgId, students: students.sort((a, b) => a.name.localeCompare(b.name)) };
  },
});

/** Sums best marks per concept. Exported for tests. */
export function conceptTotals(rows: Pick<Doc<"questionProgress">, "conceptId" | "bestMarks" | "totalMarks">[]): ConceptTotals[] {
  const map = new Map<string, ConceptTotals>();
  for (const r of rows) {
    const t = map.get(r.conceptId) ?? { conceptId: r.conceptId, earned: 0, attempted: 0 };
    t.earned += Math.min(r.bestMarks, r.totalMarks);
    t.attempted += 1;
    map.set(r.conceptId, t);
  }
  return [...map.values()];
}

const latest = (rows: Pick<Doc<"questionProgress">, "lastAttemptAt">[]) =>
  rows.reduce<string | null>((l, r) => (!l || r.lastAttemptAt > l ? r.lastAttemptAt : l), null);

/** Hand-in rate, average score and marking backlog for a class's most recent sets. */
export const classSets = query({
  args: { classId: v.id("classes") },
  handler: async (ctx, args) => {
    const view = await viewableClass(ctx, args.classId);
    if (!view) return null;
    const sets = await ctx.db.query("assignments").withIndex("by_class", (q) => q.eq("classId", args.classId)).order("desc").take(REPORT_SETS);
    const now = Date.now();
    const rows = await Promise.all(sets.map(async (a) => {
      const subs = await ctx.db.query("assignmentSubmissions").withIndex("by_assignment", (q) => q.eq("assignmentId", a._id)).take(MAX_STUDENTS_PER_CLASS + 50);
      const closed = subs.filter((s) => isClosed(s, now));
      return {
        _id: a._id,
        title: a.title,
        kind: a.kind,
        createdAt: a.createdAt,
        dueAt: a.dueAt ?? null,
        totalMarks: a.totalMarks,
        started: subs.length,
        closed: closed.length,
        averagePercent: closed.length > 0 && a.totalMarks > 0
          ? Math.round((closed.reduce((n, s) => n + s.marks, 0) / (closed.length * a.totalMarks)) * 100)
          : null,
        pending: closed.reduce((n, s) => n + s.pendingCount, 0),
      };
    }));
    return { studentCount: view.cls.studentCount, sets: rows };
  },
});

/** Per-question results across every closed sitting of one set: which questions the class found hardest. */
export const setQuestions = query({
  args: { assignmentId: v.id("assignments") },
  handler: async (ctx, args) => {
    const a = await ctx.db.get("assignments", args.assignmentId);
    if (!a || !(await viewableClass(ctx, a.classId))) return null;
    const now = Date.now();
    const subs = (await ctx.db.query("assignmentSubmissions").withIndex("by_assignment", (q) => q.eq("assignmentId", a._id)).take(MAX_STUDENTS_PER_CLASS + 50))
      .filter((s) => isClosed(s, now));
    const answers = (await Promise.all(subs.map((s) =>
      ctx.db.query("assignmentAnswers").withIndex("by_submission", (q) => q.eq("submissionId", s._id)).take(MAX_SET_QUESTIONS),
    ))).flat();
    return { sittings: subs.length, questions: questionBreakdown(a.questions, answers) };
  },
});

/** Exported for tests. Unanswered questions count as zero for students who handed in. */
export function questionBreakdown(
  questions: Doc<"assignments">["questions"],
  answers: Pick<Doc<"assignmentAnswers">, "questionId" | "marks">[],
) {
  return questions.map((q) => {
    const mine = answers.filter((a) => a.questionId === q.questionId);
    const marked = mine.filter((a): a is typeof a & { marks: number } => a.marks !== null);
    return {
      questionId: q.questionId,
      totalMarks: q.totalMarks,
      answered: mine.length,
      marked: marked.length,
      pending: mine.length - marked.length,
      fullMarks: marked.filter((a) => a.marks >= q.totalMarks).length,
      marksEarned: marked.reduce((n, a) => n + a.marks, 0),
    };
  });
}

/** One learner's sittings in classes the viewer can see, newest first. */
export const learnerSets = query({
  args: { orgId: v.id("organizations"), userId: v.id("users") },
  handler: async (ctx, args) => {
    const access = await staffAccess(ctx, args.orgId);
    if (!access || !(await canViewLearner(ctx, access, args.userId))) return [];
    const manage = canManage(access.membership.role);
    const classRows = await ctx.db.query("classMembers").withIndex("by_user_and_org", (q) => q.eq("userId", args.userId).eq("orgId", args.orgId)).take(MAX_CLASSES_PER_STUDENT);
    const classes = (await Promise.all(classRows.map((r) => ctx.db.get("classes", r.classId))))
      .filter((c): c is Doc<"classes"> => c !== null && (manage || c.teacherId === access.user._id));
    const classNames = new Map<Id<"classes">, string>(classes.map((c) => [c._id, c.name]));
    const subs = (await ctx.db.query("assignmentSubmissions").withIndex("by_user_and_submittedAt", (q) => q.eq("userId", args.userId)).order("desc").take(LEARNER_SITTINGS))
      .filter((s) => classNames.has(s.classId));
    const now = Date.now();
    const rows = await Promise.all(subs.map(async (s) => {
      const a = await ctx.db.get("assignments", s.assignmentId);
      if (!a) return null;
      const closed = isClosed(s, now);
      return {
        submissionId: s._id,
        assignmentId: a._id,
        title: a.title,
        kind: a.kind,
        className: classNames.get(s.classId) ?? "",
        startedAt: s.startedAt,
        submittedAt: s.submittedAt ?? null,
        closed,
        marks: s.marks,
        totalMarks: a.totalMarks,
        pendingCount: s.pendingCount,
      };
    }));
    return rows.filter((r) => r !== null).sort((x, y) => y.startedAt.localeCompare(x.startedAt));
  },
});
