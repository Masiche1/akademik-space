import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edpm5-u5",
  code: "5",
  title: "Powers, Roots and Large Numbers",
  description:
    "Year 5: square numbers and square roots, cube numbers, multiplying and dividing by 10, 100 and 1000, and numbers to one million.",
  lessons: [lesson51, lesson52, lesson53],
};
