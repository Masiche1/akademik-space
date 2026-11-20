import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "pc-u5",
  code: "5",
  title: "Conics, Parametric Equations and Limits",
  description: "Analyze parabolas, circles, ellipses, and hyperbolas from their equations and geometric definitions; describe curves with parametric and polar equations; and build the foundations of calculus through limits, continuity, and the derivative as a limit.",
  lessons: [lesson51, lesson52, lesson53],
};
