import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "pc-u1",
  code: "1",
  title: "Polynomial and Rational Functions",
  description: "Analyze polynomial graphs through degree, zeros, multiplicity, and end behavior; use polynomial division and root theorems; and interpret rational functions through their discontinuities, intercepts, and asymptotes.",
  lessons: [lesson11, lesson12, lesson13],
};
