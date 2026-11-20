import type { MarkLevel } from "../../../types.ts";

export type LevelFocus = "writing" | "analysis";

const DESCRIPTORS: Record<LevelFocus, [string, string, string, string]> = {
  writing: [
    "Thorough, precise and well-supported writing that fully meets the task, purpose and audience; ideas are organized with control and language is polished.",
    "Clear, adequate writing that meets the task, with relevant support and mostly controlled organization and style.",
    "Partial, general writing that addresses the task only in part; support is thin and organization or style is uneven.",
    "Minimal writing with little support, weak organization and limited awareness of task or audience.",
  ],
  analysis: [
    "Thorough, precise analysis of the writer's choices and their effects, supported by well-chosen textual evidence.",
    "Clear, adequate explanation of the writer's choices, with relevant evidence.",
    "Partial, general comment on the text, with some evidence but little explanation of effect.",
    "Minimal comment with few or no references to the text.",
  ],
};

function withPart(level: MarkLevel, part?: string): MarkLevel {
  return part ? { ...level, part } : level;
}

/** Four-level rubric for an 8-mark answer or part. */
export function levels8(focus: LevelFocus, part?: string): MarkLevel[] {
  const [d4, d3, d2, d1] = DESCRIPTORS[focus];
  return [
    withPart({ level: "Level 4", marks: "7-8", descriptor: d4 }, part),
    withPart({ level: "Level 3", marks: "5-6", descriptor: d3 }, part),
    withPart({ level: "Level 2", marks: "3-4", descriptor: d2 }, part),
    withPart({ level: "Level 1", marks: "1-2", descriptor: d1 }, part),
  ];
}

/** Four-level rubric for a 6-mark answer or part. */
export function levels6(focus: LevelFocus, part?: string): MarkLevel[] {
  const [d4, d3, d2, d1] = DESCRIPTORS[focus];
  return [
    withPart({ level: "Level 4", marks: "6", descriptor: d4 }, part),
    withPart({ level: "Level 3", marks: "4-5", descriptor: d3 }, part),
    withPart({ level: "Level 2", marks: "2-3", descriptor: d2 }, part),
    withPart({ level: "Level 1", marks: "1", descriptor: d1 }, part),
  ];
}
