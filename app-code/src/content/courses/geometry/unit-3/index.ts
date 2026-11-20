import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "geo-u3",
  code: "3",
  title: "Transformations and Similarity",
  description: "Explore coordinate rules for rigid motions, compositions and symmetry, dilations and similarity scale effects, and triangle similarity criteria and proportionality theorems through precise diagram-based reasoning.",
  lessons: [lesson31, lesson32, lesson33],
};
