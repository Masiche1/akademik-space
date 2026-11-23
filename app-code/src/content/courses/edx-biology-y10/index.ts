import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit10 } from "./unit-10/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";

export const edxBiologyY10: Course = {
  id: "edx-biology-y10",
  title: "Year 10 Biology",
  shortTitle: "Biology Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE Biology (4BI1)",
  description:
    "International GCSE Biology, first year: cells, enzymes and transport across membranes; photosynthesis, digestion and circulation; and respiration, gas exchange and excretion.",
  units: [ unit1, unit10, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9,],
  edexcel: { stage: "igcse", subject: "biology", year: 10 },
};
