import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edpm1-u1",
  code: "1",
  title: "Number: Counting, Place Value and Bonds",
  description:
    "Counting to 100, tens and ones place value, addition and subtraction within 20, and doubling, halving and number bonds.",
  lessons: [lesson11, lesson12, lesson13],
};
