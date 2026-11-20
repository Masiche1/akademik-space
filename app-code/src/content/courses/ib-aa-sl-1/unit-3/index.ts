import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "aasl-u3",
  code: "3",
  title: "Geometry and Trigonometry",
  description: "Work with three-dimensional solids, the sine and cosine rules, radian measure, the unit circle and trigonometric identities, sinusoidal functions and models, and trigonometric equations.",
  lessons: [lesson31, lesson32, lesson33],
};
