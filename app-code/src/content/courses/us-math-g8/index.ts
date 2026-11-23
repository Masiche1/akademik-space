import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";

export const usMathG8: Course = {
  id: "us-math-g8",
  title: "Grade 8 Math",
  shortTitle: "Math G8",
  grade: "Grade 8",
  framework: "Common Core State Standards for Mathematics",
  description:
    "Irrational numbers, exponents and scientific notation, linear equations, slope, functions and systems, scatter plots, transformations, the Pythagorean Theorem and volume.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9],
  us: { subject: "math", grade: 8 },
};
