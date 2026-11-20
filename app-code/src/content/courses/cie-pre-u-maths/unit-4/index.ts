import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "cipum-u4",
  code: "4",
  title: "Exponentials, Logarithms and Differential Equations",
  description:
    "Exponential/logarithmic functions, first-order differential equations and their applications to growth, decay and finance — Cambridge Pre-U Mathematics 9794.",
  lessons: [lesson41, lesson42, lesson43],
};
