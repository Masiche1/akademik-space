import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";

export const unit1: Unit = {
  id: "cilm-u1",
  code: "1",
  title: "Number Foundations",
  description:
    "Place value, factors, primes, fractions, decimals, percentages and order of operations — Cambridge Lower Secondary Mathematics 0862.",
  lessons: [lesson11, lesson12, lesson13, exam11],
};
