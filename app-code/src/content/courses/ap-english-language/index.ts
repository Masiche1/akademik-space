import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apEnglishLanguage: Course = {
  id: "ap-english-language",
  title: "AP English Language and Composition",
  shortTitle: "AP Lang",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Rhetorical analysis, argumentative and synthesis writing — the AP English Language exam in exam-style questions with scored practice responses.",
  units: [unit1, unit2, unit3],
  ap: { exam: "english-language" },
};
