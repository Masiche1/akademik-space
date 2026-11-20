import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "cimg-u4",
  code: "4",
  title: "Geometry and Transformations",
  description: "Angles, polygons, circles, Pythagoras, reflections, rotations and enlargements.",
  lessons: [lesson41, lesson42, lesson43],
};
