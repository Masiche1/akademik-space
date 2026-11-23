import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usMathG9: Course = {
  id: "us-math-g9",
  title: "Grade 9 Math",
  shortTitle: "Math G9",
  grade: "Grade 9",
  framework: "Common Core State Standards for Mathematics",
  description: "Solve multi-step linear equations and inequalities, analyze functions and linear graphs, work with systems of equations, and apply exponent laws and exponential growth.",
  units: [unit1, unit2, unit3],
  us: { subject: "math", grade: 9 },
};
