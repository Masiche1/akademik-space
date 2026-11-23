import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apBiology: Course = {
  id: "ap-biology",
  title: "AP Biology",
  shortTitle: "AP Bio",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Cell structure and energetics, heredity and evolution, gene expression, and ecology — the full AP Biology curriculum in exam-style questions.",
  units: [unit1, unit2, unit3],
  ap: { exam: "biology" },
};
