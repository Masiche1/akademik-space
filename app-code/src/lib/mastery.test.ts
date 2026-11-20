import { describe, expect, test } from "vitest";
import type { Concept, QuestionResponse } from "@/content/types.ts";
import { autoMarks, conceptMastery, masteryLevel, type SavedQuestion } from "./mastery.ts";

const concept = {
  id: "k",
  questions: [
    { id: "a", totalMarks: 4 },
    { id: "b", totalMarks: 6 },
  ],
} as unknown as Concept;

const saved = (rows: SavedQuestion[]) => new Map(rows.map((r) => [r.questionId, r]));

describe("conceptMastery", () => {
  test("nothing attempted is not started", () => {
    expect(conceptMastery(concept, saved([]))).toEqual({ level: "not-started", percent: 0, attempted: 0, total: 2 });
  });

  test("unattempted questions pull the percentage down", () => {
    const m = conceptMastery(concept, saved([{ questionId: "a", bestMarks: 4, totalMarks: 4, attemptCount: 1 }]));
    expect(m).toMatchObject({ percent: 40, attempted: 1, level: "developing" });
  });

  test("high best marks across the concept are secure", () => {
    const m = conceptMastery(concept, saved([
      { questionId: "a", bestMarks: 4, totalMarks: 4, attemptCount: 2 },
      { questionId: "b", bestMarks: 5, totalMarks: 6, attemptCount: 1 },
    ]));
    expect(m).toMatchObject({ percent: 90, level: "secure" });
  });
});

test("masteryLevel thresholds", () => {
  expect(masteryLevel(39, 1)).toBe("learning");
  expect(masteryLevel(40, 1)).toBe("developing");
  expect(masteryLevel(80, 1)).toBe("secure");
});

describe("autoMarks", () => {
  const numeric: QuestionResponse = { type: "numeric", parts: [{ label: "x", answer: 1 }, { label: "y", answer: 2 }] };
  test("correct earns full marks", () => expect(autoMarks(numeric, { status: "correct" }, 4)).toBe(4));
  test("partial numeric earns a share", () => expect(autoMarks(numeric, { status: "partial", partResults: [true, false] }, 4)).toBe(2));
  test("incorrect earns zero", () => expect(autoMarks({ type: "open" }, { status: "incorrect" }, 4)).toBe(0));
  test("self-assessed needs the student", () => expect(autoMarks({ type: "open" }, { status: "self" }, 4)).toBeNull());
});
