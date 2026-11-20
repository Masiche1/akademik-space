import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { ATTEMPT_STATUS } from "./schema.ts";
import { validateAttempt } from "./lib/progress.ts";
import { saveAttempt } from "./lib/attempts.ts";
import { currentUser, requireUser as requireAnyUser } from "./lib/auth.ts";

const ID_ARG = v.string();

function checkId(id: string, label: string) {
  if (id.length === 0 || id.length > 200) {
    throw new ConvexError({ code: "BAD_REQUEST", message: `Invalid ${label}` });
  }
}

const requireUser = (ctx: Parameters<typeof requireAnyUser>[0]) => requireAnyUser(ctx, "Sign in to save your progress");

/** Saves one attempt. Auto-marked questions send their mark; self-assessed ones send the student's own mark. */
export const record = mutation({
  args: {
    courseId: ID_ARG,
    conceptId: ID_ARG,
    questionId: ID_ARG,
    marks: v.number(),
    totalMarks: v.number(),
    status: ATTEMPT_STATUS,
  },
  handler: async (ctx, args) => {
    checkId(args.courseId, "course");
    checkId(args.conceptId, "concept");
    checkId(args.questionId, "question");
    const user = await requireUser(ctx);
    const existing = await ctx.db
      .query("questionProgress")
      .withIndex("by_user_and_question", (q) => q.eq("userId", user._id).eq("questionId", args.questionId))
      .unique();
    const error = validateAttempt(args.marks, existing?.totalMarks ?? args.totalMarks);
    if (error) throw new ConvexError({ code: "BAD_REQUEST", message: error });
    const { bestMarks, attemptCount } = await saveAttempt(ctx, { userId: user._id, ...args });
    return { bestMarks, attemptCount };
  },
});

/** Saved attempts for one question. Null when signed out or never attempted. */
export const forQuestion = query({
  args: { questionId: ID_ARG },
  handler: async (ctx, args) => {
    const user = await currentUser(ctx);
    if (!user) return null;
    return await ctx.db
      .query("questionProgress")
      .withIndex("by_user_and_question", (q) => q.eq("userId", user._id).eq("questionId", args.questionId))
      .unique();
  },
});

/** Every saved question in one course (bounded by the course size, under 200 questions). */
export const forCourse = query({
  args: { courseId: ID_ARG },
  handler: async (ctx, args) => {
    const user = await currentUser(ctx);
    if (!user) return [];
    return await ctx.db
      .query("questionProgress")
      .withIndex("by_user_and_course", (q) => q.eq("userId", user._id).eq("courseId", args.courseId))
      .take(500);
  },
});

/** Dashboard: per-course totals plus the most recent attempts. */
export const dashboard = query({
  args: {},
  handler: async (ctx) => {
    const user = await currentUser(ctx);
    if (!user) return { courses: [], recent: [] };
    const courses = await ctx.db
      .query("courseProgress")
      .withIndex("by_user_and_lastAttemptAt", (q) => q.eq("userId", user._id))
      .order("desc")
      .take(50);
    const recent = await ctx.db
      .query("questionProgress")
      .withIndex("by_user_and_lastAttemptAt", (q) => q.eq("userId", user._id))
      .order("desc")
      .take(12);
    return { courses, recent };
  },
});
