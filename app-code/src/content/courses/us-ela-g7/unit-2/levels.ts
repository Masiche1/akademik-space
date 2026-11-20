import type { MarkLevel } from "../../../types.ts";

const range = (lo: number, hi: number): string => (lo === hi ? `${lo}` : `${lo}-${hi}`);

/**
 * Four-level rubric, highest first. `cuts` are the lowest marks of Levels 4, 3 and 2.
 * The top of Level 4 is always `max`, so it matches the marks for the question or part.
 */
export function rubric(max: number, cuts: [number, number, number], part?: string): MarkLevel[] {
  const [l4, l3, l2] = cuts;
  const bands: MarkLevel[] = [
    { level: "Level 4", marks: range(l4, max), descriptor: "Thorough, precise reading with well-chosen textual evidence and insightful explanation." },
    { level: "Level 3", marks: range(l3, l4 - 1), descriptor: "Clear, adequate reading supported by relevant textual evidence." },
    { level: "Level 2", marks: range(l2, l3 - 1), descriptor: "Partial, general understanding with limited or loosely linked evidence." },
    { level: "Level 1", marks: range(1, l2 - 1), descriptor: "Minimal response with little relevant evidence or understanding." },
  ];
  return part ? bands.map((b) => ({ ...b, part })) : bands;
}
