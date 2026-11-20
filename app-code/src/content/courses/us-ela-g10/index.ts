import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usElaG10: Course = {
  id: "us-ela-g10",
  title: "Grade 10 English Language Arts",
  shortTitle: "ELA G10",
  grade: "Grade 10",
  framework: "Common Core State Standards for English Language Arts",
  description:
    "Shakespearean drama, poetry and how authors transform sources; evaluating and synthesizing sources, memoir and satire; and literary analysis, research writing, usage and style.",
  units: [unit1, unit2, unit3],
  us: { subject: "ela", grade: 10 },
};
