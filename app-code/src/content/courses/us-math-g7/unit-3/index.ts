import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "m7-u3",
  code: "3",
  title: "Geometry, Statistics and Probability",
  description: "Work with circles and angles, find area, surface area and volume, draw triangles and slice solids, make inferences from random samples, and find probabilities of simple and compound events.",
  lessons: [lesson31, lesson32, lesson33],
};
