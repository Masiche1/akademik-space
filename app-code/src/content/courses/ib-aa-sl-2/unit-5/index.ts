import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "aasl-u5",
  code: "5",
  title: "Differential Calculus",
  description: "Differentiate polynomial, trigonometric, exponential and logarithmic functions; find tangents and normals, classify stationary points, solve optimization problems, and analyse motion with kinematics.",
  lessons: [lesson51, lesson52, lesson53],
};
