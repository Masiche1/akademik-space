import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usElaG8: Course = {
  id: "us-ela-g8",
  title: "Grade 8 English Language Arts",
  shortTitle: "ELA G8",
  grade: "Grade 8",
  framework: "Common Core State Standards for English Language Arts",
  description:
    "The strongest evidence, theme, dialogue and allusion in literature; central ideas, point of view and conflicting arguments in informational texts; and argument, narrative and research writing with conventions.",
  units: [unit1, unit2, unit3],
  us: { subject: "ela", grade: 8 },
};
