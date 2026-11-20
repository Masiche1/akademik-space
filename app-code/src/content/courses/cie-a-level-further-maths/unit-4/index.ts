import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "cialfm-u4",
  code: "4",
  title: "Further Trigonometry and Hyperbolic Functions",
  description: "Trigonometric identities and equations, hyperbolic functions and their calculus.",
  lessons: [lesson41, lesson42, lesson43],
};
