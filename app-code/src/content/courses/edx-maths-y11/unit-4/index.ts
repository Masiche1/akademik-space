import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edm11-u4",
  code: "4",
  title: "Applied and Problem Solving",
  description: "Pythagoras and trigonometry in three dimensions, angles between lines and planes, compound measures, exponential growth and decay, and multi-step geometry, statistics and probability problems.",
  lessons: [lesson41, lesson42, lesson43],
};
