import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-1-1.ts";
import { lesson72 } from "./lesson-1-2.ts";
import { lesson73 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";
import { exam12 } from "./lesson-1-x2.ts";
import { exam13 } from "./lesson-1-x3.ts";
import { exam14 } from "./lesson-1-x4.ts";
import { exam15 } from "./lesson-1-x5.ts";

export const unit1: Unit = {
  id: "edpm5-u1",
  code: "1",
  title: "Number: Place Value, Operations and Number Types",
  description:
    "Place value to 1 000 000, negative numbers, multiplication and division of larger numbers, factors, multiples, HCF, LCM and prime numbers.",
  lessons: [lesson71, lesson72, lesson73, exam11, exam12, exam13, exam14, exam15],
};
