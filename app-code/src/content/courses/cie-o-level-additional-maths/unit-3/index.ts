import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";
import { lesson34 } from "./lesson-3-4.ts";

export const unit3: Unit = {
  id: "olam-u3",
  code: "3",
  title: "Trigonometry and Circular Measure",
  description: "Radians, arc length, trigonometric identities and equations.",
  lessons: [lesson31, lesson32, lesson33, lesson34],
};
