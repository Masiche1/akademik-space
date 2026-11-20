import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxChemistryY11: Course = {
  id: "edx-chemistry-y11",
  title: "Year 11 Chemistry",
  shortTitle: "Chemistry Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE Chemistry (4CH1)",
  description:
    "International GCSE Chemistry, second year: energetics, rates and equilibrium; electrolysis and industrial processes; and organic chemistry from crude oil to polymers.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "chemistry", year: 11 },
};
