import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "apcbc-u2",
  code: "2",
  title: "Parametric, Polar, and Vector Functions",
  description: "Work with parametric equations, polar coordinates, vector-valued functions, and motion in the plane.",
  lessons: [lesson21, lesson22, lesson23],
};
