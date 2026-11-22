import type { MarkLevel } from "../../../types.ts";

const span = (lo: number, hi: number): string =>
  lo === hi ? `${lo}` : `${lo}-${hi}`;

/**
 * Four-level rubric for an extended response worth `top` marks (6-10).
 * Pass `part` for a part of a structured question. The top level always ends at `top`.
 */
export const levels = (top: number, part?: string): MarkLevel[] => {
  const base = part ? { part } : {};
  const a = Math.round(top / 4);
  const b = Math.round(top / 2);
  const c = Math.floor((3 * top) / 4);
  return [
    {
      ...base,
      level: "Level 4",
      marks: span(c + 1, top),
      descriptor:
        "Thorough, precise response supported by carefully chosen textual evidence, with insightful explanation of how the author's choices create meaning.",
    },
    {
      ...base,
      level: "Level 3",
      marks: span(b + 1, c),
      descriptor:
        "Clear, adequate response with relevant evidence and some explanation of how it supports the point.",
    },
    {
      ...base,
      level: "Level 2",
      marks: span(a + 1, b),
      descriptor:
        "Partial, general response with some evidence but little explanation or analysis.",
    },
    {
      ...base,
      level: "Level 1",
      marks: span(1, a),
      descriptor:
        "Minimal response with little or no relevant evidence from the text.",
    },
  ];
};
