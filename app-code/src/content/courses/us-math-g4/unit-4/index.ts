import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { lesson44 } from "./lesson-4-4.ts";
import { lesson45 } from "./lesson-4-5.ts";

export const unit4: Unit = {
  id: "m4-u4",
  code: "4",
  title: "Division",
  description: "Divide multi-digit numbers using area models and standard algorithm.",
  lessons: [lesson41, lesson42, lesson43, lesson44, lesson45],
};
