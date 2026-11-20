import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edpm2-u2",
  code: "2",
  title: "Multiplication, Division and Fractions",
  description:
    "Multiplication and division facts for 2, 5 and 10, halves, quarters and thirds of shapes and amounts, and solving word problems.",
  lessons: [lesson21, lesson22, lesson23],
};
