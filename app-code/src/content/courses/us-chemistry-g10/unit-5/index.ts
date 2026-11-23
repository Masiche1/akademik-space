import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "chem10-u5",
  code: "5",
  title: "Capstone: Applied Chemistry",
  description: "Apply stoichiometry to real processes, analyze energy changes, practice safe laboratory technique, and evaluate experimental design for reliability.",
  lessons: [lesson51, lesson52, lesson53],
};
