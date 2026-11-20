import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "aihl-u3",
  code: "3",
  title: "Vectors and Transformations",
  description:
    "Describe motion with vectors, use scalar and vector products for angles, work and areas, apply radian measure and identities, and transform shapes in the plane with matrices.",
  lessons: [lesson31, lesson32, lesson33],
};
