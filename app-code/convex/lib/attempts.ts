import type { MutationCtx } from "../_generated/server";
import type { Id } from "../_generated/dataModel.d.ts";
import { applyAttempt, type AttemptStatus } from "./progress.ts";
import { bumpCourse, bumpDaily, markActive } from "./analytics.ts";

export type AttemptInput = {
  userId: Id<"users">;
  courseId: string;
  conceptId: string;
  questionId: string;
  marks: number;
  totalMarks: number;
  status: AttemptStatus;
};

/**
 * Saves one attempt to questionProgress and keeps courseProgress totals in sync.
 * Shared by practice attempts and marked assignment answers. Callers validate marks first.
 */
export async function saveAttempt(ctx: MutationCtx, a: AttemptInput) {
  const existing = await ctx.db
    .query("questionProgress")
    .withIndex("by_user_and_question", (q) => q.eq("userId", a.userId).eq("questionId", a.questionId))
    .unique();
  // Once saved, a question's mark total is fixed so the course totals stay consistent.
  const totalMarks = existing?.totalMarks ?? a.totalMarks;
  const marks = Math.min(a.marks, totalMarks);
  const now = new Date().toISOString();
  const { bestMarks, delta } = applyAttempt(existing, marks, totalMarks);
  if (existing) {
    await ctx.db.patch("questionProgress", existing._id, {
      bestMarks, lastMarks: marks, lastStatus: a.status, attemptCount: existing.attemptCount + 1, lastAttemptAt: now,
    });
  } else {
    await ctx.db.insert("questionProgress", {
      userId: a.userId, courseId: a.courseId, conceptId: a.conceptId, questionId: a.questionId,
      totalMarks, bestMarks, lastMarks: marks, lastStatus: a.status, attemptCount: 1, lastAttemptAt: now,
    });
  }
  const course = await ctx.db
    .query("courseProgress")
    .withIndex("by_user_and_course", (q) => q.eq("userId", a.userId).eq("courseId", a.courseId))
    .unique();
  await bumpDaily(ctx, "attempts");
  await markActive(ctx, a.userId);
  await bumpCourse(ctx, a.courseId, course === null);
  if (course) {
    await ctx.db.patch("courseProgress", course._id, {
      questionsAttempted: course.questionsAttempted + delta.questionsAttempted,
      questionsSecure: course.questionsSecure + delta.questionsSecure,
      marksEarned: course.marksEarned + delta.marksEarned,
      marksAvailable: course.marksAvailable + delta.marksAvailable,
      lastAttemptAt: now,
    });
  } else {
    await ctx.db.insert("courseProgress", { userId: a.userId, courseId: a.courseId, ...delta, lastAttemptAt: now });
  }
  return { bestMarks, attemptCount: (existing?.attemptCount ?? 0) + 1, totalMarks };
}
