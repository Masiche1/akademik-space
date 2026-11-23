import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-3-1.ts";
import { lesson82 } from "./lesson-3-2.ts";
import { lesson83 } from "./lesson-3-3.ts";
import { exam31 } from "./lesson-3-x1.ts";
import { exam32 } from "./lesson-3-x2.ts";
import { exam33 } from "./lesson-3-x3.ts";
import { exam34 } from "./lesson-3-x4.ts";
import { exam35 } from "./lesson-3-x5.ts";

export const unit3: Unit = {
  id: "edpm6-u3",
  code: "3",
  title: "Measurement, Statistics and Problem Solving",
  description:
    "Area of triangles, parallelograms and trapeziums, angles in triangles and quadrilaterals, mean/median/mode/range, and speed and money problems.",
  lessons: [lesson81, lesson82, lesson83, exam31, exam32, exam33, exam34, exam35],
};
