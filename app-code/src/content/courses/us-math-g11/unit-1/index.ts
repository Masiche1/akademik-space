import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "m11-u1",
  code: "1",
  title: "Polynomial Operations",
  description: "Add, subtract, multiply and factor polynomials, and apply the remainder and factor theorems.",
  lessons: [lesson11, lesson12, lesson13],
};
