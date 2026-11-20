import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edpm3-u2",
  code: "2",
  title: "Multiplication, Division and Fractions",
  description:
    "All times tables to 12 × 12, division with remainders, unit and non-unit fractions of shapes and amounts, equivalent fractions, and fractions on a number line.",
  lessons: [lesson21, lesson22, lesson23],
};
