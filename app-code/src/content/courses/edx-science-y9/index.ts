import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxScienceY9: Course = {
  id: "edx-science-y9",
  title: "Year 9 Science",
  shortTitle: "Science Y9",
  grade: "Year 9",
  framework: "Pearson Edexcel Lower Secondary Science (Key Stage 3)",
  description:
    "Digestion, respiration and inheritance; atomic structure, the periodic table and reactivity; and waves, pressure, moments, space and magnetism.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "lower-secondary", subject: "science", year: 9 },
};
