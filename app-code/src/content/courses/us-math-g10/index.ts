import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usMathG10: Course = {
  id: "us-math-g10",
  title: "Grade 10 Math",
  shortTitle: "Math G10",
  grade: "Grade 10",
  framework: "Common Core State Standards for Mathematics",
  description: "Prove triangle congruence, apply similarity and right-triangle trigonometry, reason about circles and arcs, and compute area, surface area and volume of two- and three-dimensional figures.",
  units: [unit1, unit2, unit3],
  us: { subject: "math", grade: 10 },
};
