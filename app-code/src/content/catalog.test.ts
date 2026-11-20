import { describe, expect, it } from "vitest";
import { COURSES } from "./catalog.ts";
import { findLatexErrors, findQuestionErrors } from "./validate.ts";

const allQuestions = COURSES.flatMap((c) =>
  c.units.flatMap((u) => u.lessons.flatMap((l) => l.concepts.flatMap((k) => k.questions))),
);

describe("curriculum content integrity", () => {
  it("has valid LaTeX in every text field", () => {
    expect(findLatexErrors(COURSES)).toEqual([]);
  }, 120000);

  it("has unique question and concept ids", () => {
    const ids = allQuestions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
    const conceptIds = COURSES.flatMap((c) => c.units.flatMap((u) => u.lessons.flatMap((l) => l.concepts.map((k) => k.id))));
    expect(new Set(conceptIds).size).toBe(conceptIds.length);
  });

  it.each(allQuestions.map((q) => [q.id, q] as const))("%s: marks, principles and answers are valid", (_id, q) => {
    expect(findQuestionErrors(q)).toEqual([]);
  });
});
