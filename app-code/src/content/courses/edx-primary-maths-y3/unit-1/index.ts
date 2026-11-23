import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";
import { exam12 } from "./lesson-1-x2.ts";
import { exam13 } from "./lesson-1-x3.ts";
import { exam14 } from "./lesson-1-x4.ts";
import { exam15 } from "./lesson-1-x5.ts";

export const unit1: Unit = {
  id: "edpm3-u1",
  code: "1",
  title: "Number: Place Value and Addition/Subtraction to 1000",
  description:
    "Place value to 1000 including thousands, counting in hundreds, addition and subtraction to and across 1000 using partitioning, compensation and counting up.",
  lessons: [lesson11, lesson12, lesson13, exam11, exam12, exam13, exam14, exam15],
};
