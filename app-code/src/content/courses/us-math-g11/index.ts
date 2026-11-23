import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usMathG11: Course = {
  id: "us-math-g11",
  title: "Grade 11 Math",
  shortTitle: "Math G11",
  grade: "Grade 11",
  framework: "Common Core State Standards for Mathematics",
  description: "Operate on and factor polynomials, analyze quadratic functions, and work with exponential, logarithmic and rational functions.",
  units: [unit1, unit2, unit3],
  us: { subject: "math", grade: 11 },
};
