import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";

export const unit1: Unit = {
  id: "aihl-u1",
  code: "1",
  title: "Number Algebra, Complex Numbers and Matrices",
  description:
    "Extend your number toolkit with logarithm laws, rational exponents, infinite series and complex numbers in Cartesian, polar and exponential forms, then use matrices, inverses, eigenvalues and diagonalization to solve systems and model change over time.",
  lessons: [lesson11, lesson12, lesson13, lesson14],
};
