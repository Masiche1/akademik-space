import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxMathsY10: Course = {
  id: "edx-maths-y10",
  title: "Year 10 Maths",
  shortTitle: "Maths Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE Mathematics A",
  description:
    "International GCSE Maths A, first year: number and surds, algebra and inequalities, circle theorems and trigonometry, and statistics, sets and probability, at Foundation and Higher tier.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "igcse", subject: "maths", year: 10 },
};
