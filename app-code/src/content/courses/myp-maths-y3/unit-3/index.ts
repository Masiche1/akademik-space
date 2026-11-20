import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypm3-u3",
  code: "3",
  title: "Geometry, Trigonometry and Data",
  description: "Use Pythagoras' theorem and sine, cosine and tangent ratios to find missing sides and angles, calculate areas with trigonometric heights, find volumes and surface areas of prisms and cylinders, interpret scatter graphs with lines of best fit, and use tree diagrams for combined probabilities.",
  lessons: [lesson31, lesson32, lesson33],
};
