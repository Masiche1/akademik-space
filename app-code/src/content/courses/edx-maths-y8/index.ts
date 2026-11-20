import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxMathsY8: Course = {
  id: "edx-maths-y8",
  title: "Year 8 Maths",
  shortTitle: "Maths Y8",
  grade: "Year 8",
  framework: "Pearson Edexcel Lower Secondary (Key Stage 3)",
  description:
    "Number, ratio and proportion, algebraic expressions and equations, angles, area and transformations, and data handling and probability.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "lower-secondary", subject: "maths", year: 8 },
};
