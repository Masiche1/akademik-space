import type { Difficulty, MarkPrinciple, MarkStep, Markscheme, McqChoice, Question, QuestionPart, TextExtract } from "../../types.ts";

export type StepInput =
  | { reasoning: string; marks: number; markCode: MarkStep["markCode"]; part?: string }
  | [reasoning: string, marks: number, markCode: MarkStep["markCode"], part?: string]
  | [part: string, reasoning: string, marks: number, markCode: MarkStep["markCode"]];
export type PrincipleInput = MarkPrinciple | [MarkPrinciple["kind"], string, string];
export type ChoiceInput = McqChoice | [id: string, text: string];

const toPrinciple = (p: PrincipleInput): MarkPrinciple => Array.isArray(p) ? { kind: p[0], name: p[1], statement: p[2] } : p;
const toStep = (s: StepInput): MarkStep => {
  if (!Array.isArray(s)) return s;
  const a = s as unknown[];
  if (typeof a[1] === "string" && typeof a[2] === "number") {
    return { part: String(a[0]), reasoning: String(a[1]), marks: Number(a[2]), markCode: a[3] as MarkStep["markCode"] };
  }
  return { reasoning: String(a[0]), marks: Number(a[1]), markCode: a[2] as MarkStep["markCode"], part: a[3] as string | undefined };
};
const toChoice = (c: ChoiceInput): McqChoice => Array.isArray(c) ? { id: c[0], text: c[1] } : c;

export const P = (kind: MarkPrinciple["kind"], name: string, statement: string): MarkPrinciple => ({ kind, name, statement });

export const ms = (principles: PrincipleInput[], steps: StepInput[], finalAnswer: string, commonErrors: string[] = []): Markscheme => ({
  principles: principles.map(toPrinciple),
  steps: steps.map(toStep),
  finalAnswer,
  commonErrors,
});

export const mcqQ = (
  id: string,
  difficulty: Difficulty,
  stem: string,
  choices: ChoiceInput[],
  correctChoiceId: string,
  principles: PrincipleInput[],
  steps: StepInput[],
  finalAnswer: string,
  commonErrors: string[] = [],
): Question => ({
  id,
  difficulty,
  totalMarks: 1,
  stem,
  response: { type: "mcq", choices: choices.map(toChoice), correctChoiceId },
  markscheme: ms(principles, steps, finalAnswer, commonErrors),
});

export const openQ = (
  id: string,
  difficulty: Difficulty,
  totalMarks: number,
  stem: string,
  principles: PrincipleInput[],
  steps: StepInput[],
  finalAnswer: string,
  options: { parts?: QuestionPart[]; commonErrors?: string[]; extract?: TextExtract } = {},
): Question => ({
  id,
  difficulty,
  totalMarks,
  stem,
  ...(options.extract ? { extract: options.extract } : {}),
  ...(options.parts ? { parts: options.parts } : {}),
  response: { type: "open" },
  markscheme: ms(principles, steps, finalAnswer, options.commonErrors),
});
