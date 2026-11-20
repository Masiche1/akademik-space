import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edpm2-u3",
  code: "3",
  title: "Shape, Measure, Time, Money and Data",
  description:
    "2D and 3D shape properties, shape patterns and symmetry, telling the time to quarter hours, using money, measuring length in cm and m, and handling data with tallies and pictograms.",
  lessons: [lesson31, lesson32, lesson33],
};
