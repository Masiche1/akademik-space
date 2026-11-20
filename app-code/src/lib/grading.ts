import type { NumericPart, QuestionResponse } from "../content/types.ts";

export type Answer =
  | { type: "mcq"; choiceId: string }
  | { type: "numeric"; values: string[] }
  | { type: "open"; text: string };

export type CheckResult = {
  /** "self" means the student must self-assess against the markscheme. */
  status: "correct" | "incorrect" | "partial" | "self";
  /** Per-part correctness for numeric questions. */
  partResults?: boolean[];
};

/** Parse "3", "-2.5", "3/4", "-1 / 2" into a number. Returns null if invalid. */
export function parseNumber(raw: string): number | null {
  const s = raw.trim().replace(/,/g, "").replace(/\u2212/g, "-");
  if (s === "") return null;
  const frac = s.match(/^(-?\d+(?:\.\d+)?)\s*\/\s*(-?\d+(?:\.\d+)?)$/);
  if (frac) {
    const den = Number(frac[2]);
    return den === 0 ? null : Number(frac[1]) / den;
  }
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
}

function matches(value: number | null, part: NumericPart): boolean {
  return value !== null && Math.abs(value - part.answer) <= (part.tolerance ?? 0.001);
}

function checkNumeric(parts: NumericPart[], raw: string[], unordered: boolean): boolean[] {
  const values = parts.map((_, i) => parseNumber(raw[i] ?? ""));
  if (!unordered) return parts.map((p, i) => matches(values[i] ?? null, p));
  // Unordered: greedily match each entered value to an unused expected part.
  const used = new Set<number>();
  return values.map((value) => {
    const idx = parts.findIndex((p, j) => !used.has(j) && matches(value, p));
    if (idx === -1) return false;
    used.add(idx);
    return true;
  });
}

export function checkAnswer(response: QuestionResponse, answer: Answer): CheckResult {
  if (response.type === "mcq" && answer.type === "mcq") {
    return { status: answer.choiceId === response.correctChoiceId ? "correct" : "incorrect" };
  }
  if (response.type === "numeric" && answer.type === "numeric") {
    const partResults = checkNumeric(response.parts, answer.values, response.unordered ?? false);
    const correct = partResults.filter(Boolean).length;
    const status = correct === partResults.length ? "correct" : correct === 0 ? "incorrect" : "partial";
    return { status, partResults };
  }
  return { status: "self" };
}

export function isAnswerComplete(response: QuestionResponse, answer: Answer | null): boolean {
  if (!answer) return false;
  if (answer.type === "numeric" && response.type === "numeric") {
    return response.parts.every((_, i) => parseNumber(answer.values[i] ?? "") !== null);
  }
  if (answer.type === "open") return answer.text.trim().length > 0;
  return answer.type === response.type;
}
