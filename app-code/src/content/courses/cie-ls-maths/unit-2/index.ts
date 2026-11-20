import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";
import { exam21 } from "./lesson-2-x1.ts";

export const unit2: Unit = {
  id: "cilm-u2",
  code: "2",
  title: "Ratio, Proportion and Rates",
  description:
    "Ratios, sharing, unit rates, speed, direct proportion, scale drawings and best buys — Cambridge Lower Secondary Mathematics 0862.",
  lessons: [lesson21, lesson22, lesson23, exam21],
};
