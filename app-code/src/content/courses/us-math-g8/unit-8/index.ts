import type { Unit } from "../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "us-math-g8-u8",
  code: "U8",
  title: "Geometry: Pythagorean Theorem, Volume, Transformations",
  description:
    "Deep dive into Pythagorean Theorem, volume formulas, and geometric transformations.",
  lessons: [lesson81, lesson82, lesson83],
};
