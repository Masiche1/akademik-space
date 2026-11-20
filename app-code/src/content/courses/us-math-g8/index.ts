import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usMathG8: Course = {
  id: "us-math-g8",
  title: "Grade 8 Math",
  shortTitle: "Math G8",
  grade: "Grade 8",
  framework: "Common Core State Standards for Mathematics",
  description:
    "Irrational numbers, exponents and scientific notation, linear equations, slope, functions and systems, scatter plots, transformations, the Pythagorean Theorem and volume.",
  units: [unit1, unit2, unit3],
  us: { subject: "math", grade: 8 },
};
