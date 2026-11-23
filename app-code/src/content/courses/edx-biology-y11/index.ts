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

export const edxBiologyY11: Course = {
  id: "edx-biology-y11",
  title: "Year 11 Biology",
  shortTitle: "Biology Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE Biology (4BI1)",
  description:
    "International GCSE Biology, second year: nerves, hormones and homeostasis; reproduction, genetics and natural selection; and ecology, nutrient cycles and biotechnology.",
  units: [ unit1, unit10, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9,],
  edexcel: { stage: "igcse", subject: "biology", year: 11 },
};
