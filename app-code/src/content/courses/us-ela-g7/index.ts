import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usElaG7: Course = {
  id: "us-ela-g7",
  title: "Grade 7 English Language Arts",
  shortTitle: "ELA G7",
  grade: "Grade 7",
  framework: "Common Core State Standards for English Language Arts",
  description:
    "Citing evidence, theme and point of view in literature; central ideas, structure and argument in informational texts; and argument, informative and narrative writing with conventions.",
  units: [unit1, unit2, unit3],
  us: { subject: "ela", grade: 7 },
};
