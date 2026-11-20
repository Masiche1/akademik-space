import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edm11-u3",
  code: "3",
  title: "Further Algebra",
  description: "Direct and inverse proportion, changing the subject of a formula, completing the square, simultaneous equations with a quadratic or a circle, fractional and negative indices, and algebraic proof.",
  lessons: [lesson31, lesson32, lesson33],
};
