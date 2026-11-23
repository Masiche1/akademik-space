import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apCalculusBc: Course = {
  id: "ap-calculus-bc",
  title: "AP Calculus BC",
  shortTitle: "AP Calc BC",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "The BC extension of Calculus AB: infinite sequences and series, parametric and polar functions, vector-valued functions, and advanced integration techniques.",
  units: [unit1, unit2, unit3],
  ap: { exam: "calculus-bc" },
};
