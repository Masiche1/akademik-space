import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypms4-u3",
  code: "3",
  title: "Geometry, Trigonometry, Statistics and Probability",
  description: "Apply circle theorems and coordinate geometry, use sine and cosine rules for non-right-angled triangles and bearings, and analyse data with measures of spread, cumulative frequency, scatter graphs and probability of combined events.",
  lessons: [lesson31, lesson32, lesson33],
};
