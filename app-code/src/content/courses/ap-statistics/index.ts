import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apStatistics: Course = {
  id: "ap-statistics",
  title: "AP Statistics",
  shortTitle: "AP Stats",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Exploring data, probability and sampling distributions, and statistical inference — confidence intervals and significance tests in exam-style questions.",
  units: [unit1, unit2, unit3],
  ap: { exam: "statistics" },
};
