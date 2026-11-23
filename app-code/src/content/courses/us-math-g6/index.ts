import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const usMathG6: Course = {
  id: "us-math-g6",
  title: "Grade 6 Math",
  shortTitle: "Math G6",
  grade: "Grade 6",
  framework: "Common Core State Standards for Mathematics",
  description: "Ratios and proportions, integers, expressions and equations, inequalities, geometry (area/volume), coordinate plane and statistics.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  us: { subject: "math", grade: 6 },
};
