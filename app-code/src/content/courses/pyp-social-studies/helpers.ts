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

const MCQ_SPECIAL = /all of the (above|these)|none of the (above|these)|none of these|\b[abcd]\s+and\s+[abcd]\b/i;
const mcqSeed = (s: string): number => {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
  return h >>> 0;
};
const mcqOrder = (texts: readonly string[], seed: string): number[] | null => {
  if (texts.some((t) => MCQ_SPECIAL.test(t))) return null;
  let a = mcqSeed(seed);
  const rnd = () => {
    a |= 0; a = (a + 0x6D2B79F5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
  const order = texts.map((_, i) => i);
  for (let i = order.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [order[i], order[j]] = [order[j], order[i]];
  }
  return order.every((v, i) => v === i) && order.length > 1 ? [order[1], order[0], ...order.slice(2)] : order;
};
const letterOf = (i: number): string => String.fromCharCode(97 + i);
const letterMapOf = (order: number[]): Record<string, string> =>
  Object.fromEntries(order.map((oldI, pos) => [letterOf(oldI), letterOf(pos)]));
const remapLetters = (s: string, map: Record<string, string> | null): string =>
  map ? s.replace(/\(([abcd])\)/g, (m, L) => (map[L] ? "(" + map[L] + ")" : m)) : s;

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
): Question => {
  const __o = mcqOrder(choices.map((c) => (Array.isArray(c) ? c[1] : c.text)), id);
  let __choices = choices;
  let __correctId = correctChoiceId;
  let __lmap: Record<string, string> | null = null;
  if (__o) {
    __lmap = {};
    __choices = __o.map((oldI, pos) => {
      const c = choices[oldI];
      const oldId = Array.isArray(c) ? c[0] : c.id;
      __lmap![oldId] = letterOf(pos);
      return Array.isArray(c) ? ([letterOf(pos), c[1]] as ChoiceInput) : ({ id: letterOf(pos), text: c.text } as McqChoice);
    });
    if (__lmap[correctChoiceId]) __correctId = __lmap[correctChoiceId];
  }
  const __steps: StepInput[] = __lmap
    ? steps.map((st): StepInput => {
        if (!Array.isArray(st)) return { ...st, reasoning: remapLetters(st.reasoning, __lmap) };
        const a = st as unknown[];
        if (typeof a[1] === "string" && typeof a[2] === "number") return [a[0], remapLetters(String(a[1]), __lmap), a[2], a[3]] as StepInput;
        return [remapLetters(String(a[0]), __lmap), a[1], a[2], a[3]] as StepInput;
      })
    : steps;
  return {
    id,
    difficulty,
    totalMarks: 1,
    stem,
    response: { type: "mcq", choices: __choices.map(toChoice), correctChoiceId: __correctId },
    markscheme: ms(principles, __steps, remapLetters(finalAnswer, __lmap), commonErrors.map((e) => remapLetters(e, __lmap))),
  };
};

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
