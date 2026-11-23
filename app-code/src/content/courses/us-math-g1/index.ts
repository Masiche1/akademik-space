import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const usMathG1: Course = {
  id: "us-math-g1",
  title: "Grade 1 Math",
  shortTitle: "Math G1",
  grade: "Grade 1",
  framework: "Common Core State Standards for Mathematics",
  description: "Count to 120, add and subtract within 20 and 100, solve word problems, measure length and time, work with data, and explore 2D and 3D shapes.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  us: { subject: "math", grade: 1 },
};
