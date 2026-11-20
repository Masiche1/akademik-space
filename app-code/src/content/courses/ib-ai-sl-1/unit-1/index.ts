import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "aisl-u1",
  code: "1",
  title: "Number and Algebra",
  description: "Work with standard form, bounds and percentage error; apply laws of exponents and logarithms; model situations with arithmetic and geometric sequences; and solve financial problems involving compound interest, depreciation, inflation, loans and annuities using technology.",
  lessons: [lesson11, lesson12, lesson13],
};
