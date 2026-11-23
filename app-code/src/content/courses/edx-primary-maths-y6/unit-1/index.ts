import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-1-1.ts";
import { lesson62 } from "./lesson-1-2.ts";
import { lesson63 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";
import { exam12 } from "./lesson-1-x2.ts";
import { exam13 } from "./lesson-1-x3.ts";
import { exam14 } from "./lesson-1-x4.ts";
import { exam15 } from "./lesson-1-x5.ts";

export const unit1: Unit = {
  id: "edpm6-u1",
  code: "1",
  title: "Number: Place Value, Operations and BIDMAS",
  description:
    "Place value to 10 million, order of operations (BIDMAS), formal multiplication and division, and fraction/decimal/percentage operations.",
  lessons: [lesson61, lesson62, lesson63, exam11, exam12, exam13, exam14, exam15],
};
