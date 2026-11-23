import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "m11-u3",
  code: "3",
  title: "Exponential, Logarithmic and Rational Functions",
  description: "Analyze exponential growth and decay, evaluate logarithms and graph rational functions with asymptotes.",
  lessons: [lesson31, lesson32, lesson33],
};
