import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edm9-u3",
  code: "3",
  title: "Geometry and Measures",
  description: "Use Pythagoras' theorem and right-angled trigonometry, calculate with arcs, sectors and cylinders, and reason about congruent and similar shapes.",
  lessons: [lesson31, lesson32, lesson33],
};
