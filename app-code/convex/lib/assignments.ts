import type { Infer } from "convex/values";
import type { MutationCtx } from "../_generated/server";
import type { Doc, Id } from "../_generated/dataModel.d.ts";
import type { SET_ANSWER } from "../schema.ts";
import { getQuestion } from "../../src/content/catalog.ts";
import { checkAnswer } from "../../src/lib/grading.ts";
import { autoMarks } from "../../src/lib/mastery.ts";
import { saveAttempt } from "./attempts.ts";
import { fail } from "./teach.ts";

export const MAX_SET_QUESTIONS = 40;
export const MAX_ASSIGNMENTS_PER_CLASS = 200;
export const MIN_TIME_LIMIT = 5;
export const MAX_TIME_LIMIT = 300;
/** Answers that arrive this long after the deadline still count, to cover network delay. */
export const GRACE_MS = 30_000;
const MAX_OPEN_ANSWER = 20_000;
const MAX_FEEDBACK = 2_000;
const MAX_INSTRUCTIONS = 2_000;

export type SetAnswer = Infer<typeof SET_ANSWER>;
export type SetQuestion = Doc<"assignments">["questions"][number];

export function validateTitle(raw: string): string | null {
  const title = raw.trim();
  if (title.length < 1) return "Give the set a title";
  if (title.length > 80) return "Titles must be 80 characters or fewer";
  return null;
}

/** Looks up each question in the catalog; marks and marking mode come from the content, never the client. */
export function buildQuestions(questionIds: string[]): SetQuestion[] {
  const ids = [...new Set(questionIds)];
  if (ids.length === 0) throw fail("BAD_REQUEST", "Choose at least one question");
  if (ids.length > MAX_SET_QUESTIONS) throw fail("BAD_REQUEST", `A set can have up to ${MAX_SET_QUESTIONS} questions`);
  return ids.map((questionId) => {
    const loc = getQuestion(questionId);
    if (!loc) throw fail("BAD_REQUEST", "One of the questions no longer exists");
    return { questionId, totalMarks: loc.question.totalMarks, teacherMarked: loc.question.response.type === "open" };
  });
}

export function checkSetOptions(args: { instructions?: string; timeLimitMinutes?: number; dueAt?: string }, now: number) {
  if (args.instructions && args.instructions.length > MAX_INSTRUCTIONS) {
    throw fail("BAD_REQUEST", `Instructions must be ${MAX_INSTRUCTIONS} characters or fewer`);
  }
  const limit = args.timeLimitMinutes;
  if (limit !== undefined && (!Number.isInteger(limit) || limit < MIN_TIME_LIMIT || limit > MAX_TIME_LIMIT)) {
    throw fail("BAD_REQUEST", `Time limits must be ${MIN_TIME_LIMIT} to ${MAX_TIME_LIMIT} minutes`);
  }
  if (args.dueAt !== undefined) {
    const due = Date.parse(args.dueAt);
    if (Number.isNaN(due)) throw fail("BAD_REQUEST", "Invalid due date");
    if (due <= now) throw fail("BAD_REQUEST", "The due date must be in the future");
  }
}

/** A sitting ends at the time limit or the due date, whichever comes first. */
export function sittingDeadline(startedAt: number, timeLimitMinutes?: number, dueAt?: string): string | undefined {
  const ends = [
    timeLimitMinutes !== undefined ? startedAt + timeLimitMinutes * 60_000 : null,
    dueAt !== undefined ? Date.parse(dueAt) : null,
  ].filter((t): t is number => t !== null);
  return ends.length > 0 ? new Date(Math.min(...ends)).toISOString() : undefined;
}

export const isPastDeadline = (deadlineAt: string | undefined, now: number) =>
  deadlineAt !== undefined && now > Date.parse(deadlineAt) + GRACE_MS;

/** A sitting is closed once handed in or once its deadline passes. */
export const isClosed = (sub: Pick<Doc<"assignmentSubmissions">, "submittedAt" | "deadlineAt">, now: number) =>
  sub.submittedAt !== undefined || isPastDeadline(sub.deadlineAt, now);

export function checkAnswerShape(answer: SetAnswer) {
  const tooLong =
    (answer.type === "mcq" && answer.choiceId.length > 20) ||
    (answer.type === "numeric" && (answer.values.length > 12 || answer.values.some((v) => v.length > 60))) ||
    (answer.type === "open" && answer.text.length > MAX_OPEN_ANSWER);
  if (tooLong) throw fail("BAD_REQUEST", "That answer is too long");
}

/** Server-side marking. Null means a written answer the teacher must mark. */
export function markAnswer(questionId: string, answer: SetAnswer): number | null {
  const loc = getQuestion(questionId);
  if (!loc) return 0;
  const { response, totalMarks } = loc.question;
  if (response.type !== answer.type) return response.type === "open" ? null : 0;
  return autoMarks(response, checkAnswer(response, answer), totalMarks);
}

export function validateTeacherMark(marks: number, totalMarks: number, feedback?: string) {
  if (!Number.isInteger(marks) || marks < 0 || marks > totalMarks) throw fail("BAD_REQUEST", `Marks must be a whole number from 0 to ${totalMarks}`);
  if (feedback && feedback.length > MAX_FEEDBACK) throw fail("BAD_REQUEST", `Feedback must be ${MAX_FEEDBACK} characters or fewer`);
}

/** Feeds a marked set answer into the student's course progress, like a practice attempt. */
export async function recordSetProgress(ctx: MutationCtx, userId: Id<"users">, questionId: string, marks: number) {
  const loc = getQuestion(questionId);
  if (!loc) return;
  const totalMarks = loc.question.totalMarks;
  const status = marks >= totalMarks ? "correct" : marks === 0 ? "incorrect" : "partial";
  await saveAttempt(ctx, { userId, courseId: loc.course.id, conceptId: loc.concept.id, questionId, marks, totalMarks, status });
}
