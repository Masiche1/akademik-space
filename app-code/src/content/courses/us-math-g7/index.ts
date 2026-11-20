import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usMathG7: Course = {
  id: "us-math-g7",
  title: "Grade 7 Math",
  shortTitle: "Math G7",
  grade: "Grade 7",
  framework: "Common Core State Standards for Mathematics",
  description:
    "Proportional relationships and percents, rational number operations, expressions and two-step equations, and geometry, statistics and probability.",
  units: [unit1, unit2, unit3],
  us: { subject: "math", grade: 7 },
};
