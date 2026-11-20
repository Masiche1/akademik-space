import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usElaG9: Course = {
  id: "us-ela-g9",
  title: "Grade 9 English Language Arts",
  shortTitle: "ELA G9",
  grade: "Grade 9",
  framework: "Common Core State Standards for English Language Arts",
  description:
    "Theme, complex characters and structure in literature; rhetoric, argument and seminal US documents; and argument, informative and narrative writing with phrases, clauses and punctuation.",
  units: [unit1, unit2, unit3],
  us: { subject: "ela", grade: 9 },
};
