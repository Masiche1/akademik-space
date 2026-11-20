import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxBiologyY10: Course = {
  id: "edx-biology-y10",
  title: "Year 10 Biology",
  shortTitle: "Biology Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE Biology (4BI1)",
  description:
    "International GCSE Biology, first year: cells, enzymes and transport across membranes; photosynthesis, digestion and circulation; and respiration, gas exchange and excretion.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "biology", year: 10 },
};
