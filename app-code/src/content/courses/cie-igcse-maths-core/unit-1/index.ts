import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cimg-u1",
  code: "1",
  title: "Number",
  description: "Types of number, operations, fractions, decimals, percentages, indices and standard form.",
  lessons: [lesson11, lesson12, lesson13],
};
