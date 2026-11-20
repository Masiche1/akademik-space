import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "pc-u2",
  code: "2",
  title: "Exponential, Logarithmic and Trigonometric Functions",
  description: "Explore exponential growth and logarithms, measure angles in radians, use the unit circle to evaluate trigonometric functions, and apply identities to solve equations.",
  lessons: [lesson21, lesson22, lesson23],
};
