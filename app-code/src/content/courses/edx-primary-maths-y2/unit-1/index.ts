import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edpm2-u1",
  code: "1",
  title: "Number: Place Value and Addition/Subtraction",
  description:
    "Counting in steps to 100, tens and ones place value, addition and subtraction within 100 including crossing ten.",
  lessons: [lesson11, lesson12, lesson13],
};
