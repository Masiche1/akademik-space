import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxMathsY9: Course = {
  id: "edx-maths-y9",
  title: "Year 9 Maths",
  shortTitle: "Maths Y9",
  grade: "Year 9",
  framework: "Pearson Edexcel Lower Secondary (Key Stage 3)",
  description:
    "Indices and standard form, finance, quadratics and graphs, Pythagoras and trigonometry, similarity, and combined probability, building towards International GCSE.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "lower-secondary", subject: "maths", year: 9 },
};
