import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxChemistryY10: Course = {
  id: "edx-chemistry-y10",
  title: "Year 10 Chemistry",
  shortTitle: "Chemistry Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE Chemistry (4CH1)",
  description:
    "International GCSE Chemistry, first year: states of matter, atomic structure and the periodic table; moles, calculations and bonding; and inorganic chemistry from Groups 1 and 7 to metals and acids.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "igcse", subject: "chemistry", year: 10 },
};
