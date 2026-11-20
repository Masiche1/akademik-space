import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxMathsY11: Course = {
  id: "edx-maths-y11",
  title: "Year 11 Maths",
  shortTitle: "Maths Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE Mathematics A",
  description:
    "International GCSE Maths A, second year: sequences, functions and calculus, vectors and transformations, further algebra and proof, and multi-step exam problem solving, at Foundation and Higher tier.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "igcse", subject: "maths", year: 11 },
};
