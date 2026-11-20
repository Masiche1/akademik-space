import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "alg1-u1",
  code: "1",
  title: "Equations and Inequalities",
  description: "Build fluency with solving and interpreting linear equations, literal formulas, and inequalities. Students use properties of equality and inequalities, reason about solution sets, and interpret formulas with attention to units and context.",
  lessons: [lesson11, lesson12, lesson13],
};
