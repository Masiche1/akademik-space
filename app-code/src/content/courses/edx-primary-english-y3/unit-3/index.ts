import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-3-1.ts";
import { lesson92 } from "./lesson-3-2.ts";
import { lesson93 } from "./lesson-3-3.ts";
import { exam31 } from "./lesson-3-x1.ts";
import { exam32 } from "./lesson-3-x2.ts";
import { exam33 } from "./lesson-3-x3.ts";
import { exam34 } from "./lesson-3-x4.ts";
import { exam35 } from "./lesson-3-x5.ts";

export const unit3: Unit = {
  id: "edpe3-u3",
  code: "3",
  title: "Writing and Composition",
  description:
    "Paragraphs and structure, planning, grammar and word choice, story writing, and editing and revising.",
  lessons: [lesson91, lesson92, lesson93, exam31, exam32, exam33, exam34, exam35],
};
