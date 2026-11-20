import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-1-1.ts";
import { lesson62 } from "./lesson-1-2.ts";
import { lesson63 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edpm6-u1",
  code: "1",
  title: "Number: Place Value, Operations and BIDMAS",
  description:
    "Place value to 10 million, order of operations (BIDMAS), formal multiplication and division, and fraction/decimal/percentage operations.",
  lessons: [lesson61, lesson62, lesson63],
};
