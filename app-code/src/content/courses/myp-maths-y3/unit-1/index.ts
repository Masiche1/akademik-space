import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "mypm3-u1",
  code: "1",
  title: "Number",
  description: "Distinguish rational and irrational numbers, use absolute value and the order of operations, apply the laws of indices, calculate with standard form including addition and subtraction, and solve successive percentage, reverse percentage and proportion problems.",
  lessons: [lesson11, lesson12, lesson13],
};
