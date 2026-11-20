import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "cipum-u5",
  code: "5",
  title: "Applications of Mathematics",
  description:
    "Probability and distributions, normal distribution and hypothesis testing, mechanics — Cambridge Pre-U Mathematics 9794 Applications of Mathematics.",
  lessons: [lesson51, lesson52, lesson53],
};
