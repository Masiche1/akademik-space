import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const usMathG5: Course = {
  id: "us-math-g5",
  title: "Grade 5 Math",
  shortTitle: "Math G5",
  grade: "Grade 5",
  framework: "Common Core State Standards for Mathematics",
  description: "Place value to billions, multi-digit operations, fraction and decimal operations, volume, coordinate plane and data analysis.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  us: { subject: "math", grade: 5 },
};
