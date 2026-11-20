import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edpm3-u3",
  code: "3",
  title: "Shape, Measure, Time, Money and Data",
  description:
    "2D and 3D shape properties including angles, symmetry and patterns, measuring length, mass and capacity, perimeter, telling time, money and interpreting charts.",
  lessons: [lesson31, lesson32, lesson33],
};
