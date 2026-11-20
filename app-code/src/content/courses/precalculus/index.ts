import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";

export const precalculus: Course = {
  id: "precalculus",
  title: "Precalculus",
  grade: "Grade 12",
  framework: "Common Core State Standards",
  description:
    "Functions, trigonometry and triangle laws, vectors, matrices and complex numbers, conics, parametric equations and limits: the full toolkit for calculus.",
  units: [unit1, unit2, unit3, unit4, unit5],
};
