import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apCalculusAb: Course = {
  id: "ap-calculus-ab",
  title: "AP Calculus AB",
  shortTitle: "AP Calc AB",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Limits and continuity, differentiation and its applications, and an introduction to integration — the full AP Calculus AB course in exam-style questions.",
  units: [unit1, unit2, unit3],
  ap: { exam: "calculus-ab" },
};
