import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";
import { exam81 } from "./lesson-8-x1.ts";

export const unit8: Unit = {
  id: "cilm-u8",
  code: "8",
  title: "Statistics and Probability",
  description:
    "Averages, data display, pie charts, two-way tables and probability — Cambridge Lower Secondary Mathematics 0862.",
  lessons: [lesson81, lesson82, lesson83, exam81],
};
