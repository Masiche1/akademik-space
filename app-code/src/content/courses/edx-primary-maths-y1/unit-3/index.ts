import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edpm1-u3",
  code: "3",
  title: "Multiplication, Division and Data",
  description:
    "Multiplication as equal groups and the 2, 5 and 10 times tables, division by sharing and grouping with remainders, and reading pictograms and tally charts.",
  lessons: [lesson31, lesson32, lesson33],
};
