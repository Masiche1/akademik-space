import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-1-1.ts";
import { lesson42 } from "./lesson-1-2.ts";
import { lesson43 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edpm4-u1",
  code: "1",
  title: "Number: Place Value, Operations and Number Types",
  description:
    "Place value to 10 000, rounding and estimating, column addition and subtraction with exchanging, factors, multiples, prime, square and cube numbers.",
  lessons: [lesson41, lesson42, lesson43],
};
