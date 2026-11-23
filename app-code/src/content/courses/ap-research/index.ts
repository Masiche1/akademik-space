import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apResearch: Course = {
  id: "ap-research",
  title: "AP Research",
  shortTitle: "AP Research",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Year-long independent research culminating in an academic paper and oral defense — methodological rigor and scholarly communication.",
  units: [unit1, unit2, unit3],
  ap: { exam: "research" },
};
