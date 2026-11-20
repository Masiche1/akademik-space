import { convexTest } from "convex-test";
import { describe, expect, test } from "vitest";
import { api } from "./_generated/api";
import schema from "./schema";
import { modules } from "./test.setup";
import { applyAttempt, validateAttempt } from "./lib/progress";

const base = { courseId: "c1", conceptId: "k1", questionId: "q1", totalMarks: 5, status: "self" as const };

describe("applyAttempt", () => {
  test("first attempt counts the question and its marks", () => {
    expect(applyAttempt(null, 4, 5)).toEqual({
      bestMarks: 4,
      delta: { questionsAttempted: 1, questionsSecure: 1, marksEarned: 4, marksAvailable: 5 },
    });
  });

  test("a worse retry changes nothing", () => {
    expect(applyAttempt({ bestMarks: 4, totalMarks: 5 }, 1, 5).delta).toEqual({
      questionsAttempted: 0, questionsSecure: 0, marksEarned: 0, marksAvailable: 0,
    });
  });

  test("a better retry adds only the improvement and can make a question secure", () => {
    expect(applyAttempt({ bestMarks: 2, totalMarks: 5 }, 5, 5)).toEqual({
      bestMarks: 5,
      delta: { questionsAttempted: 0, questionsSecure: 1, marksEarned: 3, marksAvailable: 0 },
    });
  });
});

describe("validateAttempt", () => {
  test.each([[-1, 5], [6, 5], [2.5, 5], [0, 0], [1, 101]])("rejects %s of %s", (m, t) => {
    expect(validateAttempt(m, t)).not.toBeNull();
  });
  test("accepts a valid mark", () => expect(validateAttempt(0, 5)).toBeNull());
});

describe("progress functions", () => {
  test("signed-out students cannot save and see no progress", async () => {
    const t = convexTest(schema, modules);
    await expect(t.mutation(api.progress.record, { ...base, marks: 3 })).rejects.toThrow(/Sign in/);
    expect(await t.query(api.progress.forQuestion, { questionId: "q1" })).toBeNull();
  });

  test("keeps the best mark and course totals across retries", async () => {
    const t = convexTest(schema, modules);
    const student = t.withIdentity({ tokenIdentifier: "issuer|student" });
    await student.mutation(api.progress.record, { ...base, marks: 2 });
    await student.mutation(api.progress.record, { ...base, marks: 5 });
    await student.mutation(api.progress.record, { ...base, marks: 1 });
    await student.mutation(api.progress.record, { ...base, questionId: "q2", marks: 0, totalMarks: 3, status: "incorrect" });

    const q1 = await student.query(api.progress.forQuestion, { questionId: "q1" });
    expect(q1).toMatchObject({ bestMarks: 5, lastMarks: 1, attemptCount: 3 });

    const { courses, recent } = await student.query(api.progress.dashboard, {});
    expect(courses).toHaveLength(1);
    expect(courses[0]).toMatchObject({ questionsAttempted: 2, questionsSecure: 1, marksEarned: 5, marksAvailable: 8 });
    expect(recent.map((r) => r.questionId)).toEqual(["q2", "q1"]);
  });

  test("rejects impossible marks and a changed mark total", async () => {
    const t = convexTest(schema, modules);
    const student = t.withIdentity({ tokenIdentifier: "issuer|student" });
    await expect(student.mutation(api.progress.record, { ...base, marks: 9 })).rejects.toThrow(/Marks must be/);
    await student.mutation(api.progress.record, { ...base, marks: 2 });
    // The saved total (5) wins, so 9 is still out of range.
    await expect(student.mutation(api.progress.record, { ...base, marks: 9, totalMarks: 20 })).rejects.toThrow(/Marks must be/);
  });

  test("students only see their own progress", async () => {
    const t = convexTest(schema, modules);
    await t.withIdentity({ tokenIdentifier: "issuer|a" }).mutation(api.progress.record, { ...base, marks: 5 });
    const other = t.withIdentity({ tokenIdentifier: "issuer|b" });
    expect(await other.query(api.progress.forCourse, { courseId: "c1" })).toEqual([]);
    expect((await other.query(api.progress.dashboard, {})).courses).toEqual([]);
  });
});
