import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edm7-u4",
  code: "4",
  title: "Geometry, Measure and Statistics",
  description:
    "Angles and shape properties, area and perimeter, capacity and mass, averages and range, and simple probability.",
  lessons: [lesson41, lesson42, lesson43],
};
