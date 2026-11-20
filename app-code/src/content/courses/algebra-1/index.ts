import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";

export const algebra1: Course = {
  id: "algebra-1",
  title: "Algebra 1",
  grade: "Grade 9",
  framework: "Common Core State Standards",
  description:
    "Linear equations and systems, exponents, polynomials and factoring, and data analysis: the algebraic reasoning every later course is built on.",
  units: [unit1, unit2, unit3, unit4, unit5],
};
