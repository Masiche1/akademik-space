import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";

export const usElaG11: Course = {
  id: "us-ela-g11",
  title: "Grade 11 English Language Arts",
  shortTitle: "ELA G11",
  grade: "Grade 11",
  framework: "Common Core State Standards for English Language Arts",
  description:
    "American literature from the Puritans to the Naturalists; founding documents and the rhetoric of great American speeches; and rhetorical analysis, synthesis, personal essays and advanced style.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9],
  us: { subject: "ela", grade: 11 },
};
