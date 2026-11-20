import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "ediaspm-u2",
  code: "2",
  title: "Pure Mathematics 2",
  description:
    "WMA12 P2: the factor theorem and algebraic proof, arithmetic and geometric series, exponentials and logarithms, advanced differentiation rules and Newton-Raphson numerical methods.",
  lessons: [lesson21, lesson22, lesson23],
};
