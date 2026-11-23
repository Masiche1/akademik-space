import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usElaG12: Course = {
  id: "us-ela-g12",
  title: "Grade 12 English Language Arts",
  shortTitle: "ELA G12",
  grade: "Grade 12",
  framework: "Common Core State Standards for English Language Arts",
  description:
    "Capstone ELA: American literature from modernism to contemporary voices, founding documents and the rhetoric of great speeches, and advanced analysis — close reading, argument, and synthesis.",
  units: [unit1, unit2, unit3],
  us: { subject: "ela", grade: 12 },
};
