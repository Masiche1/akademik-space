import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";

export const unit1: Unit = {
  id: "aahl-u1",
  code: "1",
  title: "Counting, Proof, Complex Numbers and Linear Systems",
  description: "Extend counting and the binomial theorem, work with complex numbers in Cartesian, polar and Euler form, prove results by induction, contradiction and De Moivre's theorem, and solve systems of linear equations.",
  lessons: [lesson11, lesson12, lesson13, lesson14],
};
