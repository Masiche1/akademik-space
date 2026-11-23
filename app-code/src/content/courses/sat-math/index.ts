import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const satMath: Course = {
  id: "sat-math",
  title: "SAT Math",
  shortTitle: "SAT Math",
  grade: "11-12",
  framework: "College Board SAT",
  description: "Algebra, advanced math, and data analysis — the SAT Math section in exam-style questions covering the full digital SAT math domain.",
  units: [unit1, unit2, unit3],
  sat: { section: "math" },
};
