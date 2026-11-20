import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edpm3-u1",
  code: "1",
  title: "Number: Place Value and Addition/Subtraction to 1000",
  description:
    "Place value to 1000 including thousands, counting in hundreds, addition and subtraction to and across 1000 using partitioning, compensation and counting up.",
  lessons: [lesson11, lesson12, lesson13],
};
