import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usMathG12: Course = {
  id: "us-math-g12",
  title: "Grade 12 Math",
  shortTitle: "Math G12",
  grade: "Grade 12",
  framework: "Common Core State Standards for Mathematics + Precalculus",
  description: "Analyze function transformations, inverses and composition, work with trigonometric functions and identities, explore sequences and series, and introduce limits and rates of change.",
  units: [unit1, unit2, unit3],
  us: { subject: "math", grade: 12 },
};
