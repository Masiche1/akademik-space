import katex from "katex";
import { MATH_PATTERN } from "@/components/math-text.tsx";
import type { Question, Unit } from "./types.ts";

/** Every LaTeX fragment in any text field must render, with no stray control characters. */
export function findLatexErrors(value: unknown, key = "root"): string[] {
  const failures: string[] = [];
  if (typeof value === "string") {
    // Markscheme "working" is raw display LaTeX; everything else uses $ delimiters.
    const segments = key === "working"
      ? [value]
      : [...value.matchAll(new RegExp(MATH_PATTERN))].map((m) => m[1] ?? m[2] ?? "");
    for (const tex of segments) {
      try {
        katex.renderToString(tex, { throwOnError: true, strict: "ignore" });
      } catch (e) {
        failures.push(`${tex} -> ${(e as Error).message}`);
      }
      if (/[\t\f\v\b\r]/.test(tex)) failures.push(`control character in: ${JSON.stringify(tex)}`);
    }
  } else if (Array.isArray(value)) {
    for (const v of value) failures.push(...findLatexErrors(v, key));
  } else if (value && typeof value === "object") {
    for (const [k, v] of Object.entries(value)) failures.push(...findLatexErrors(v, k));
  }
  return failures;
}

/** Structural checks for a single question: marks add up, answers exist. */
export function findQuestionErrors(q: Question): string[] {
  const errs: string[] = [];
  const stepMarks = q.markscheme.steps.reduce((s, step) => s + step.marks, 0);
  if (stepMarks !== q.totalMarks) errs.push(`${q.id}: step marks ${stepMarks} != totalMarks ${q.totalMarks}`);
  if (q.markscheme.principles.length === 0) errs.push(`${q.id}: no principles`);
  if (q.parts) {
    const partSum = q.parts.reduce((s, p) => s + p.marks, 0);
    if (partSum !== q.totalMarks) errs.push(`${q.id}: part marks ${partSum} != totalMarks ${q.totalMarks}`);
    for (const p of q.parts) {
      const m = q.markscheme.steps.filter((s) => s.part === p.label).reduce((s, st) => s + st.marks, 0);
      if (m !== p.marks) errs.push(`${q.id}: part (${p.label}) steps total ${m} != ${p.marks}`);
    }
  }
  if (q.response.type === "mcq") {
    const { choices, correctChoiceId } = q.response;
    if (!choices.some((c) => c.id === correctChoiceId)) errs.push(`${q.id}: correct choice missing`);
  }
  if (q.response.type === "numeric") {
    for (const p of q.response.parts) if (!Number.isFinite(p.answer)) errs.push(`${q.id}: non-finite answer`);
  }
  return errs;
}

export function unitQuestions(unit: Unit): Question[] {
  return unit.lessons.flatMap((l) => l.concepts.flatMap((c) => c.questions));
}

/** All problems found in a unit. An empty array means the unit is valid. */
export function validateUnit(unit: Unit): string[] {
  const ids = unitQuestions(unit).map((q) => q.id);
  const dupes = ids.filter((id, i) => ids.indexOf(id) !== i).map((id) => `duplicate id ${id}`);
  return [...dupes, ...findLatexErrors(unit), ...unitQuestions(unit).flatMap(findQuestionErrors)];
}

/** Extra rules for IB units: every question names its exam paper, and Paper 3 is HL only. */
export function validateIbUnit(unit: Unit, level: "sl" | "hl"): string[] {
  const errs: string[] = [];
  for (const q of unitQuestions(unit)) {
    if (!q.paper) errs.push(`${q.id}: missing paper`);
    if (q.paper === "3" && level === "sl") errs.push(`${q.id}: Paper 3 is HL only`);
  }
  if (level === "hl") {
    for (const lesson of unit.lessons) {
      const hasP3 = lesson.concepts.some((c) => c.questions.some((q) => q.paper === "3"));
      if (!hasP3) errs.push(`${lesson.id}: HL lessons need at least one Paper 3 question`);
    }
  }
  return errs;
}

/** Edexcel tier rules: International GCSE questions need a tier, Key Stage 3 questions must not have one. */
export function validateTierUnit(unit: Unit, tiered: boolean): string[] {
  return unitQuestions(unit).flatMap((q) => {
    if (tiered && !q.tier) return [`${q.id}: missing tier`];
    if (!tiered && q.tier) return [`${q.id}: Key Stage 3 questions have no tier`];
    return [];
  });
}

const ENGLISH_CODES = new Set(["AO1", "AO2", "AO3", "AO4", "AO5"]);
const ENGLISH_KINDS = new Set(["technique", "convention", "context", "skill", "definition"]);

function collectStrings(value: unknown): string[] {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(collectStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(collectStrings);
  return [];
}

/** Upper bound of a level mark range such as "13-15" or "0". */
function levelTop(range: string): number | null {
  const m = /^(\d+)(?:-(\d+))?$/.exec(range.trim());
  return m ? Number(m[2] ?? m[1]) : null;
}

/** Edexcel English rules: AO mark codes, no math markup, level bands that match the marks. */
export function validateEnglishUnit(unit: Unit): string[] {
  const errs: string[] = [];
  // "$" would be rendered as math, so English content must never contain it.
  if (collectStrings(unit).some((s) => s.includes("$"))) errs.push(`${unit.id}: "$" is not allowed in English content`);
  for (const q of unitQuestions(unit)) {
    const ms = q.markscheme;
    for (const s of ms.steps) if (!ENGLISH_CODES.has(s.markCode)) errs.push(`${q.id}: mark code ${s.markCode} is not AO1-AO5`);
    for (const p of ms.principles) if (!ENGLISH_KINDS.has(p.kind)) errs.push(`${q.id}: principle kind ${p.kind} is not an English kind`);
    if (q.response.type === "open" && q.totalMarks >= 6 && !ms.levels?.length) errs.push(`${q.id}: extended responses need levels`);
    if (q.extract && !q.extract.text.trim()) errs.push(`${q.id}: empty extract`);
    const targets = q.parts ? q.parts.map((p) => ({ part: p.label as string | undefined, marks: p.marks })) : [{ part: undefined, marks: q.totalMarks }];
    for (const t of targets) {
      const bands = (ms.levels ?? []).filter((l) => (q.parts ? l.part === t.part : true));
      if (bands.length === 0) continue;
      const tops = bands.map((b) => levelTop(b.marks));
      if (tops.some((x) => x === null)) errs.push(`${q.id}: bad level mark range`);
      const top = Math.max(...tops.map((x) => x ?? 0));
      if (top !== t.marks) errs.push(`${q.id}: top level ${top} != ${t.marks} marks${t.part ? ` for part (${t.part})` : ""}`);
    }
  }
  return errs;
}
