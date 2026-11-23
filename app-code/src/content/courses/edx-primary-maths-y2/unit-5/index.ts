import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edpm2-u5",
  code: "5",
  title: "Multiplication and Division Facts",
  description:
    "Year 2: the 3, 4 and 8 times tables, related division facts, arrays and grouping, and solving one-step multiplication and division problems.",
  lessons: [lesson51, lesson52, lesson53],
};
