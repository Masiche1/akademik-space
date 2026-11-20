import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "alg2-u4",
  code: "4",
  title: "Quadratic Functions and Equations",
  description: "Analyze quadratic functions in standard and vertex form, solve quadratic equations over the real and complex numbers, and apply quadratic models to projectile motion.",
  lessons: [lesson41, lesson42, lesson43],
};
