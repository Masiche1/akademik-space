import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apEnglishLiterature: Course = {
  id: "ap-english-literature",
  title: "AP English Literature and Composition",
  shortTitle: "AP Lit",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Close reading, literary analysis of prose, poetry and drama, and evidence-based essay writing — the AP English Literature exam in exam-style questions.",
  units: [unit1, unit2, unit3],
  ap: { exam: "english-literature" },
};
