import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usElaG11: Course = {
  id: "us-ela-g11",
  title: "Grade 11 English Language Arts",
  shortTitle: "ELA G11",
  grade: "Grade 11",
  framework: "Common Core State Standards for English Language Arts",
  description:
    "American literature from the Puritans to the Naturalists; founding documents and the rhetoric of great American speeches; and rhetorical analysis, synthesis, personal essays and advanced style.",
  units: [unit1, unit2, unit3],
  us: { subject: "ela", grade: 11 },
};
