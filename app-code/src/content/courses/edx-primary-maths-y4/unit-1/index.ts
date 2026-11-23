import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-1-1.ts";
import { lesson42 } from "./lesson-1-2.ts";
import { lesson43 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";
import { exam12 } from "./lesson-1-x2.ts";
import { exam13 } from "./lesson-1-x3.ts";
import { exam14 } from "./lesson-1-x4.ts";
import { exam15 } from "./lesson-1-x5.ts";

export const unit1: Unit = {
  id: "edpm4-u1",
  code: "1",
  title: "Number: Place Value, Operations and Number Types",
  description:
    "Place value to 10 000, rounding and estimating, column addition and subtraction with exchanging, factors, multiples, prime, square and cube numbers.",
  lessons: [lesson41, lesson42, lesson43, exam11, exam12, exam13, exam14, exam15],
};
