import type { MarkLevel } from "../../../types.ts";

/** Four-level rubric for 8-mark responses. Pass `part` for a part of a structured question. */
export const levels8 = (part?: string): MarkLevel[] => {
  const base = part ? { part } : {};
  return [
    { ...base, level: "Level 4", marks: "7-8", descriptor: "Thorough, precise response that is well supported by carefully chosen textual evidence and explains clearly how the evidence supports the point." },
    { ...base, level: "Level 3", marks: "5-6", descriptor: "Clear, adequate response with relevant evidence and some explanation of how it supports the point." },
    { ...base, level: "Level 2", marks: "3-4", descriptor: "Partial, general response with some evidence but little explanation." },
    { ...base, level: "Level 1", marks: "1-2", descriptor: "Minimal response with little or no evidence from the text." },
  ];
};
