import { v } from "convex/values";
import { internalMutation, mutation, query, type MutationCtx, type QueryCtx } from "./_generated/server";
import { internal } from "./_generated/api";
import type { Doc, Id } from "./_generated/dataModel.d.ts";
import { SET_ANSWER, SET_KIND } from "./schema.ts";
import { currentUser, requireUser } from "./lib/auth.ts";
import { bumpDaily } from "./lib/analytics.ts";
import { MAX_CLASSES_PER_STUDENT, MAX_STUDENTS_PER_CLASS, fail, requireEditableClass, userNames, viewableClass } from "./lib/teach.ts";
import {
  MAX_ASSIGNMENTS_PER_CLASS, MAX_SET_QUESTIONS, buildQuestions, checkAnswerShape, checkSetOptions, isClosed, isPastDeadline, markAnswer,
  recordSetProgress, sittingDeadline, validateTeacherMark, validateTitle,
} from "./lib/assignments.ts";

/** Sets per class shown to students; older ones drop off the list. */
const STUDENT_SETS_PER_CLASS = 20;
const PURGE_BATCH = 20;

const summary = (a: Doc<"assignments">) => ({
  _id: a._id,
  classId: a.classId,
  title: a.title,
  kind: a.kind,
  questionCount: a.questions.length,
  totalMarks: a.totalMarks,
  dueAt: a.dueAt ?? null,
  timeLimitMinutes: a.timeLimitMinutes ?? null,
  solutionsReleased: a.solutionsReleased,
  createdAt: a.createdAt,
});

async function answersOf(ctx: QueryCtx, submissionId: Id<"assignmentSubmissions">) {
  return await ctx.db.query("assignmentAnswers").withIndex("by_submission", (q) => q.eq("submissionId", submissionId)).take(MAX_SET_QUESTIONS);
}

async function inClass(ctx: QueryCtx, classId: Id<"classes">, userId: Id<"users">) {
  return (await ctx.db.query("classMembers").withIndex("by_class_and_user", (q) => q.eq("classId", classId).eq("userId", userId)).unique()) !== null;
}

/** Loads an assignment the signed-in teacher may view, or null. */
async function viewableAssignment(ctx: QueryCtx, assignmentId: Id<"assignments">) {
  const assignment = await ctx.db.get("assignments", assignmentId);
  if (!assignment) return null;
  const view = await viewableClass(ctx, assignment.classId);
  return view ? { assignment, ...view } : null;
}

async function requireEditableAssignment(ctx: QueryCtx, assignmentId: Id<"assignments">) {
  const assignment = await ctx.db.get("assignments", assignmentId);
  if (!assignment) throw fail("NOT_FOUND", "Set not found");
  const access = await requireEditableClass(ctx, assignment.classId);
  return { assignment, ...access };
}

// ---------- Teacher queries ----------

/** Sets for a class, newest first, with how many students have handed in. */
export const forClass = query({
  args: { classId: v.id("classes") },
  handler: async (ctx, args) => {
    const view = await viewableClass(ctx, args.classId);
    if (!view) return [];
    const rows = await ctx.db.query("assignments").withIndex("by_class", (q) => q.eq("classId", args.classId)).order("desc").take(MAX_ASSIGNMENTS_PER_CLASS);
    return rows.map((a) => ({ ...summary(a), submittedCount: a.submittedCount }));
  },
});

/** One set's results: every student on the roster and how their sitting is going. */
export const results = query({
  args: { assignmentId: v.string() },
  handler: async (ctx, args) => {
    const id = ctx.db.normalizeId("assignments", args.assignmentId);
    if (!id) return null;
    const view = await viewableAssignment(ctx, id);
    if (!view) return null;
    const { assignment, cls } = view;
    const [members, subs] = await Promise.all([
      ctx.db.query("classMembers").withIndex("by_class", (q) => q.eq("classId", cls._id)).take(MAX_STUDENTS_PER_CLASS),
      ctx.db.query("assignmentSubmissions").withIndex("by_assignment", (q) => q.eq("assignmentId", id)).take(MAX_STUDENTS_PER_CLASS + 50),
    ]);
    const names = await userNames(ctx, members.map((m) => m.userId));
    const byUser = new Map(subs.map((s) => [s.userId, s]));
    const now = Date.now();
    const students = members.map((m) => {
      const s = byUser.get(m.userId);
      return {
        userId: m.userId,
        name: names.get(m.userId)?.name ?? "Unnamed learner",
        submission: s
          ? {
              _id: s._id, startedAt: s.startedAt, submittedAt: s.submittedAt ?? null, closed: isClosed(s, now),
              marks: s.marks, answeredCount: s.answeredCount, pendingCount: s.pendingCount,
            }
          : null,
      };
    });
    return {
      ...summary(assignment),
      questions: assignment.questions,
      instructions: assignment.instructions ?? null,
      orgId: cls.orgId,
      className: cls.name,
      canEdit: view.canEdit,
      students: students.sort((a, b) => a.name.localeCompare(b.name)),
    };
  },
});

/** One student's answers, for marking. */
export const submission = query({
  args: { submissionId: v.id("assignmentSubmissions") },
  handler: async (ctx, args) => {
    const sub = await ctx.db.get("assignmentSubmissions", args.submissionId);
    if (!sub) return null;
    const view = await viewableAssignment(ctx, sub.assignmentId);
    if (!view) return null;
    const [answers, names] = await Promise.all([answersOf(ctx, sub._id), userNames(ctx, [sub.userId])]);
    return {
      _id: sub._id,
      name: names.get(sub.userId)?.name ?? "Unnamed learner",
      closed: isClosed(sub, Date.now()),
      submittedAt: sub.submittedAt ?? null,
      marks: sub.marks,
      pendingCount: sub.pendingCount,
      answers: answers.map((a) => ({ questionId: a.questionId, answer: a.answer, marks: a.marks, feedback: a.feedback ?? null })),
    };
  },
});

// ---------- Teacher mutations ----------

export const create = mutation({
  args: {
    classId: v.id("classes"),
    title: v.string(),
    kind: SET_KIND,
    instructions: v.optional(v.string()),
    questionIds: v.array(v.string()),
    dueAt: v.optional(v.string()),
    timeLimitMinutes: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const { cls, user } = await requireEditableClass(ctx, args.classId);
    const titleError = validateTitle(args.title);
    if (titleError) throw fail("BAD_REQUEST", titleError);
    if (args.kind === "exam" && args.timeLimitMinutes === undefined) throw fail("BAD_REQUEST", "Exams need a time limit");
    const now = Date.now();
    checkSetOptions(args, now);
    const existing = await ctx.db.query("assignments").withIndex("by_class", (q) => q.eq("classId", cls._id)).take(MAX_ASSIGNMENTS_PER_CLASS);
    if (existing.length >= MAX_ASSIGNMENTS_PER_CLASS) throw fail("CONFLICT", `A class can have up to ${MAX_ASSIGNMENTS_PER_CLASS} sets`);
    const questions = buildQuestions(args.questionIds);
    const instructions = args.instructions?.trim();
    return await ctx.db.insert("assignments", {
      orgId: cls.orgId,
      classId: cls._id,
      createdBy: user._id,
      title: args.title.trim(),
      kind: args.kind,
      instructions: instructions ? instructions : undefined,
      questions,
      totalMarks: questions.reduce((s, q) => s + q.totalMarks, 0),
      dueAt: args.dueAt ? new Date(args.dueAt).toISOString() : undefined,
      timeLimitMinutes: args.timeLimitMinutes,
      solutionsReleased: false,
      submittedCount: 0,
      createdAt: new Date(now).toISOString(),
    });
  },
});

/** Lets students who have handed in see each question's markscheme. */
export const setSolutionsReleased = mutation({
  args: { assignmentId: v.id("assignments"), released: v.boolean() },
  handler: async (ctx, args) => {
    const { assignment } = await requireEditableAssignment(ctx, args.assignmentId);
    await ctx.db.patch("assignments", assignment._id, { solutionsReleased: args.released });
    return null;
  },
});

export const remove = mutation({
  args: { assignmentId: v.id("assignments") },
  handler: async (ctx, args) => {
    const { assignment } = await requireEditableAssignment(ctx, args.assignmentId);
    await deleteAssignment(ctx, assignment._id);
    return null;
  },
});

/** Deletes the set now; its sittings and answers are removed in background batches. */
export async function deleteAssignment(ctx: MutationCtx, assignmentId: Id<"assignments">) {
  await ctx.db.delete("assignments", assignmentId);
  await ctx.scheduler.runAfter(0, internal.assignments.purgeSubmissions, { assignmentId });
}

export const purgeSubmissions = internalMutation({
  args: { assignmentId: v.id("assignments") },
  handler: async (ctx, args) => {
    const subs = await ctx.db.query("assignmentSubmissions").withIndex("by_assignment", (q) => q.eq("assignmentId", args.assignmentId)).take(PURGE_BATCH);
    for (const s of subs) {
      const answers = await answersOf(ctx, s._id);
      await Promise.all(answers.map((a) => ctx.db.delete("assignmentAnswers", a._id)));
      await ctx.db.delete("assignmentSubmissions", s._id);
    }
    if (subs.length === PURGE_BATCH) await ctx.scheduler.runAfter(0, internal.assignments.purgeSubmissions, args);
    return null;
  },
});

/** Marks a written answer once the sitting is closed. The first mark also counts towards the student's progress. */
export const markWritten = mutation({
  args: { submissionId: v.id("assignmentSubmissions"), questionId: v.string(), marks: v.number(), feedback: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const sub = await ctx.db.get("assignmentSubmissions", args.submissionId);
    if (!sub) throw fail("NOT_FOUND", "Submission not found");
    const { assignment } = await requireEditableAssignment(ctx, sub.assignmentId);
    if (!isClosed(sub, Date.now())) throw fail("CONFLICT", "You can mark this once the student has handed in");
    const question = assignment.questions.find((q) => q.questionId === args.questionId);
    if (!question || !question.teacherMarked) throw fail("BAD_REQUEST", "Only written answers are marked by hand");
    validateTeacherMark(args.marks, question.totalMarks, args.feedback);
    const answer = await ctx.db
      .query("assignmentAnswers")
      .withIndex("by_submission_and_question", (q) => q.eq("submissionId", sub._id).eq("questionId", args.questionId))
      .unique();
    if (!answer) throw fail("NOT_FOUND", "The student did not answer this question");
    const feedback = args.feedback?.trim();
    await ctx.db.patch("assignmentAnswers", answer._id, { marks: args.marks, feedback: feedback ? feedback : undefined });
    await ctx.db.patch("assignmentSubmissions", sub._id, {
      marks: sub.marks - (answer.marks ?? 0) + args.marks,
      pendingCount: answer.marks === null ? Math.max(0, sub.pendingCount - 1) : sub.pendingCount,
    });
    if (answer.marks === null) await recordSetProgress(ctx, sub.userId, args.questionId, args.marks);
    return null;
  },
});

// ---------- Student ----------

/** Sets for every class the student is in, with their own sitting status. */
export const mine = query({
  args: {},
  handler: async (ctx) => {
    const user = await currentUser(ctx);
    if (!user) return [];
    const memberships = await ctx.db.query("classMembers").withIndex("by_user_and_org", (q) => q.eq("userId", user._id)).take(MAX_CLASSES_PER_STUDENT);
    const perClass = await Promise.all(memberships.map(async (m) => {
      const cls = await ctx.db.get("classes", m.classId);
      if (!cls) return [];
      const sets = await ctx.db.query("assignments").withIndex("by_class", (q) => q.eq("classId", cls._id)).order("desc").take(STUDENT_SETS_PER_CLASS);
      return await Promise.all(sets.map(async (a) => {
        const sub = await ctx.db.query("assignmentSubmissions").withIndex("by_assignment_and_user", (q) => q.eq("assignmentId", a._id).eq("userId", user._id)).unique();
        return { ...summary(a), className: cls.name, sitting: sub ? sittingOf(sub, a) : null };
      }));
    }));
    return perClass.flat().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  },
});

function sittingOf(sub: Doc<"assignmentSubmissions">, a: Doc<"assignments">) {
  const closed = isClosed(sub, Date.now());
  return {
    _id: sub._id,
    startedAt: sub.startedAt,
    deadlineAt: sub.deadlineAt ?? null,
    submittedAt: sub.submittedAt ?? null,
    closed,
    answeredCount: sub.answeredCount,
    // Scores stay hidden until the sitting is over.
    marks: closed ? sub.marks : null,
    pendingCount: closed ? sub.pendingCount : null,
    totalMarks: a.totalMarks,
  };
}

/** Question ids whose solutions are hidden for this student: sets they are still sitting or have yet to sit. */
export const lockedQuestions = query({
  args: {},
  handler: async (ctx) => {
    const user = await currentUser(ctx);
    if (!user) return [];
    const memberships = await ctx.db.query("classMembers").withIndex("by_user_and_org", (q) => q.eq("userId", user._id)).take(MAX_CLASSES_PER_STUDENT);
    const now = Date.now();
    const locked = new Set<string>();
    await Promise.all(memberships.map(async (m) => {
      const sets = await ctx.db.query("assignments").withIndex("by_class", (q) => q.eq("classId", m.classId)).order("desc").take(STUDENT_SETS_PER_CLASS);
      await Promise.all(sets.map(async (a) => {
        if (a.solutionsReleased) return;
        const sub = await ctx.db.query("assignmentSubmissions").withIndex("by_assignment_and_user", (q) => q.eq("assignmentId", a._id).eq("userId", user._id)).unique();
        const open = sub ? !isClosed(sub, now) : !isPastDeadline(a.dueAt, now);
        if (open) a.questions.forEach((q) => locked.add(q.questionId));
      }));
    }));
    return [...locked];
  },
});

/** The student's view of one set. Answers and marks only once they start; solutions only when released after hand-in. */
export const sitting = query({
  args: { assignmentId: v.string() },
  handler: async (ctx, args) => {
    const id = ctx.db.normalizeId("assignments", args.assignmentId);
    const user = await currentUser(ctx);
    if (!id || !user) return null;
    const a = await ctx.db.get("assignments", id);
    if (!a || !(await inClass(ctx, a.classId, user._id))) return null;
    const [cls, sub] = await Promise.all([
      ctx.db.get("classes", a.classId),
      ctx.db.query("assignmentSubmissions").withIndex("by_assignment_and_user", (q) => q.eq("assignmentId", id).eq("userId", user._id)).unique(),
    ]);
    const s = sub ? sittingOf(sub, a) : null;
    const answers = sub ? await answersOf(ctx, sub._id) : [];
    return {
      ...summary(a),
      className: cls?.name ?? "",
      instructions: a.instructions ?? null,
      // Question ids are revealed once the timer starts, so exams stay fair.
      questions: s ? a.questions : [],
      sitting: s,
      showSolutions: s !== null && s.closed && a.solutionsReleased,
      answers: answers.map((ans) => ({
        questionId: ans.questionId,
        answer: ans.answer,
        marks: s?.closed ? ans.marks : null,
        feedback: s?.closed ? ans.feedback ?? null : null,
      })),
    };
  },
});

export const start = mutation({
  args: { assignmentId: v.id("assignments") },
  handler: async (ctx, args) => {
    const user = await requireUser(ctx);
    const a = await ctx.db.get("assignments", args.assignmentId);
    if (!a || !(await inClass(ctx, a.classId, user._id))) throw fail("NOT_FOUND", "Set not found");
    const existing = await ctx.db.query("assignmentSubmissions").withIndex("by_assignment_and_user", (q) => q.eq("assignmentId", a._id).eq("userId", user._id)).unique();
    if (existing) return existing._id;
    const now = Date.now();
    if (isPastDeadline(a.dueAt, now)) throw fail("CONFLICT", "This set is past its due date");
    return await ctx.db.insert("assignmentSubmissions", {
      assignmentId: a._id,
      classId: a.classId,
      userId: user._id,
      startedAt: new Date(now).toISOString(),
      deadlineAt: sittingDeadline(now, a.timeLimitMinutes, a.dueAt),
      marks: 0,
      answeredCount: 0,
      pendingCount: 0,
    });
  },
});

async function requireOwnSitting(ctx: MutationCtx, submissionId: Id<"assignmentSubmissions">) {
  const user = await requireUser(ctx);
  const sub = await ctx.db.get("assignmentSubmissions", submissionId);
  if (!sub || sub.userId !== user._id) throw fail("NOT_FOUND", "Sitting not found");
  const a = await ctx.db.get("assignments", sub.assignmentId);
  if (!a) throw fail("NOT_FOUND", "This set has been deleted");
  return { user, sub, a };
}

/** Saves (or replaces) one answer. It is marked on the server straight away but the score stays hidden. */
export const saveAnswer = mutation({
  args: { submissionId: v.id("assignmentSubmissions"), questionId: v.string(), answer: SET_ANSWER },
  handler: async (ctx, args) => {
    const { sub, a } = await requireOwnSitting(ctx, args.submissionId);
    if (sub.submittedAt) throw fail("CONFLICT", "You have already handed this in");
    if (isPastDeadline(sub.deadlineAt, Date.now())) throw fail("CONFLICT", "Time is up, so this answer was not saved");
    if (!a.questions.some((q) => q.questionId === args.questionId)) throw fail("BAD_REQUEST", "That question is not in this set");
    checkAnswerShape(args.answer);
    const marks = markAnswer(args.questionId, args.answer);
    const existing = await ctx.db
      .query("assignmentAnswers")
      .withIndex("by_submission_and_question", (q) => q.eq("submissionId", sub._id).eq("questionId", args.questionId))
      .unique();
    const savedAt = new Date().toISOString();
    if (existing) {
      await ctx.db.patch("assignmentAnswers", existing._id, { answer: args.answer, marks, savedAt });
    } else {
      await ctx.db.insert("assignmentAnswers", { submissionId: sub._id, questionId: args.questionId, answer: args.answer, marks, savedAt });
    }
    const pendingBefore = existing ? Number(existing.marks === null) : 0;
    await ctx.db.patch("assignmentSubmissions", sub._id, {
      marks: sub.marks - (existing?.marks ?? 0) + (marks ?? 0),
      answeredCount: sub.answeredCount + (existing ? 0 : 1),
      pendingCount: sub.pendingCount - pendingBefore + Number(marks === null),
    });
    return { savedAt };
  },
});

/** Hands the sitting in. Allowed after time runs out too, so the student can finish cleanly. */
export const submit = mutation({
  args: { submissionId: v.id("assignmentSubmissions") },
  handler: async (ctx, args) => {
    const { sub, a } = await requireOwnSitting(ctx, args.submissionId);
    if (sub.submittedAt) return null;
    await ctx.db.patch("assignmentSubmissions", sub._id, { submittedAt: new Date().toISOString() });
    await ctx.db.patch("assignments", a._id, { submittedCount: a.submittedCount + 1 });
    await bumpDaily(ctx, "setsSubmitted");
    const answers = await answersOf(ctx, sub._id);
    for (const ans of answers) {
      if (ans.marks !== null) await recordSetProgress(ctx, sub.userId, ans.questionId, ans.marks);
    }
    return null;
  },
});
