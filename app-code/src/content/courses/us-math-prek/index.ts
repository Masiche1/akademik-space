import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const usMathPreK: Course = {
  id: "us-math-prek",
  title: "Pre-K Math",
  shortTitle: "Math Pre-K",
  grade: "Pre-K",
  framework: "Head Start Early Learning Outcomes Framework (ELOF)",
  description: "Develop early number sense: count to 20, compare quantities, add and subtract within 10, explore measurement, shapes, patterns and positional words.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  us: { subject: "math", grade: -1 },
};
