import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "aahl-u2",
  code: "2",
  title: "Further Functions and Trigonometry",
  description: "Study polynomials and their roots, rational functions, symmetry and inequalities, and extend trigonometry with reciprocal and inverse functions and compound angle identities.",
  lessons: [lesson21, lesson22, lesson23],
};
