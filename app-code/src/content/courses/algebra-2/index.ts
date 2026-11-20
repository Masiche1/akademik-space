import type { Course } from "../../types.ts";
import { unit3a } from "./unit-3a/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const algebra2: Course = {
  id: "algebra-2",
  title: "Algebra 2",
  grade: "Grade 11",
  framework: "Common Core State Standards",
  description:
    "Functions in depth: linear, quadratic, polynomial, rational, exponential and logarithmic functions, sequences and series, and probability and inference.",
  units: [unit3a, unit4, unit5, unit6, unit7, unit8],
};
