import { describe, expect, it } from "vitest";
import { checkAnswer, isAnswerComplete, parseNumber } from "./grading.ts";
import type { QuestionResponse } from "@/content/types.ts";

describe("parseNumber", () => {
  it("parses integers, decimals, fractions and unicode minus", () => {
    expect(parseNumber("4")).toBe(4);
    expect(parseNumber(" -2.5 ")).toBe(-2.5);
    expect(parseNumber("3/4")).toBe(0.75);
    expect(parseNumber("\u22123")).toBe(-3);
  });
  it("rejects empty, junk and division by zero", () => {
    expect(parseNumber("")).toBeNull();
    expect(parseNumber("abc")).toBeNull();
    expect(parseNumber("1/0")).toBeNull();
  });
});

describe("checkAnswer", () => {
  const roots: QuestionResponse = {
    type: "numeric",
    unordered: true,
    parts: [{ label: "a", answer: -3 }, { label: "b", answer: 3 }],
  };

  it("accepts unordered roots in any order", () => {
    expect(checkAnswer(roots, { type: "numeric", values: ["3", "-3"] }).status).toBe("correct");
  });

  it("does not let one value satisfy two parts", () => {
    const r = checkAnswer(roots, { type: "numeric", values: ["3", "3"] });
    expect(r.status).toBe("partial");
    expect(r.partResults).toEqual([true, false]);
  });

  it("respects order and tolerance for ordered parts", () => {
    const ordered: QuestionResponse = { type: "numeric", parts: [{ label: "x", answer: 1.5, tolerance: 0.05 }, { label: "y", answer: 2 }] };
    expect(checkAnswer(ordered, { type: "numeric", values: ["1.53", "2"] }).status).toBe("correct");
    expect(checkAnswer(ordered, { type: "numeric", values: ["2", "1.5"] }).status).toBe("incorrect");
  });

  it("grades mcq and defers open responses to self-assessment", () => {
    const mcq: QuestionResponse = { type: "mcq", choices: [], correctChoiceId: "b" };
    expect(checkAnswer(mcq, { type: "mcq", choiceId: "b" }).status).toBe("correct");
    expect(checkAnswer(mcq, { type: "mcq", choiceId: "a" }).status).toBe("incorrect");
    expect(checkAnswer({ type: "open" }, { type: "open", text: "proof" }).status).toBe("self");
  });
});

describe("isAnswerComplete", () => {
  it("requires every numeric part to be a valid number", () => {
    const r: QuestionResponse = { type: "numeric", parts: [{ label: "a", answer: 1 }, { label: "b", answer: 2 }] };
    expect(isAnswerComplete(r, { type: "numeric", values: ["1", ""] })).toBe(false);
    expect(isAnswerComplete(r, { type: "numeric", values: ["1", "2/3"] })).toBe(true);
  });
});
