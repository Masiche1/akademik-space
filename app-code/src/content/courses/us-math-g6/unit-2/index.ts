import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";
import { lesson24 } from "./lesson-2-4.ts";
import { lesson25 } from "./lesson-2-5.ts";

export const unit2: Unit = {
  id: "m6-u2",
  code: "2",
  title: "The Number System",
  description: "Integers, rational numbers, absolute value and ordering.",
  lessons: [lesson21, lesson22, lesson23, lesson24, lesson25],
};
