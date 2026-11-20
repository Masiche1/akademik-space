import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxBiologyY11: Course = {
  id: "edx-biology-y11",
  title: "Year 11 Biology",
  shortTitle: "Biology Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE Biology (4BI1)",
  description:
    "International GCSE Biology, second year: nerves, hormones and homeostasis; reproduction, genetics and natural selection; and ecology, nutrient cycles and biotechnology.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "biology", year: 11 },
};
