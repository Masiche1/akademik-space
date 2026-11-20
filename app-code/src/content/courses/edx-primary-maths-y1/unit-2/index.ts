import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edpm1-u2",
  code: "2",
  title: "Fractions, Shape, Measure, Time and Money",
  description:
    "Halves and quarters of shapes and amounts, 2D and 3D shapes, position and direction, comparing lengths and heights, telling the time and using coins.",
  lessons: [lesson21, lesson22, lesson23],
};
