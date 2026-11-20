import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypms5-u3",
  code: "3",
  title: "Geometry, Trigonometry, Statistics and Probability",
  description: "Apply circle theorems and coordinate geometry, use sine and cosine rules with bearings, calculate volumes and surface areas, apply similarity ratios, and work with expected value, regression, and probability trees.",
  lessons: [lesson31, lesson32, lesson33],
};
