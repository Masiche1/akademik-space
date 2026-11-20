import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edialpm-u1",
  code: "1",
  title: "Pure Mathematics 1",
  description:
    "WMA11 P1: quadratic functions and the discriminant, equations of straight lines, radian trigonometry with arc length and sector area, and introductory differentiation and integration.",
  lessons: [lesson11, lesson12, lesson13],
};
