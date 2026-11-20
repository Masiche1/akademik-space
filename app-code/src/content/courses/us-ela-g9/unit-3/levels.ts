import type { MarkLevel } from "../../../types.ts";

export type LevelFocus = "writing" | "analysis";

const DESCRIPTORS: Record<LevelFocus, [string, string, string, string]> = {
  writing: [
    "Thorough, precise and well-supported writing that fully meets the task, purpose and audience; ideas are organized with control, style is formal where needed and conventions are polished.",
    "Clear, adequate writing that meets the task, with relevant support and mostly controlled organization, style and conventions.",
    "Partial, general writing that addresses the task only in part; support is thin and organization, style or conventions are uneven.",
    "Minimal writing with little support, weak organization and limited awareness of task or audience.",
  ],
  analysis: [
    "Thorough, precise analysis of the writer's choices and their effects, supported by well-chosen textual evidence.",
    "Clear, adequate explanation of the writer's choices, with relevant evidence.",
    "Partial, general comment on the text, with some evidence but little explanation of effect.",
    "Minimal comment with few or no references to the text.",
  ],
};

function range(from: number, to: number): string {
  return from === to ? String(from) : `${from}-${to}`;
}

/** Four-level rubric for an answer or part worth `marks` (at least 4). The top level's upper mark equals `marks`. */
export function levels(focus: LevelFocus, marks: number, part?: string): MarkLevel[] {
  const [d4, d3, d2, d1] = DESCRIPTORS[focus];
  const c1 = Math.floor(marks / 4);
  const c2 = Math.floor(marks / 2);
  const c3 = Math.floor((3 * marks) / 4);
  const bands: MarkLevel[] = [
    { level: "Level 4", marks: range(c3 + 1, marks), descriptor: d4 },
    { level: "Level 3", marks: range(c2 + 1, c3), descriptor: d3 },
    { level: "Level 2", marks: range(c1 + 1, c2), descriptor: d2 },
    { level: "Level 1", marks: range(1, c1), descriptor: d1 },
  ];
  return part ? bands.map((b) => ({ ...b, part })) : bands;
}
