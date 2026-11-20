import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "aisl-u2",
  code: "2",
  title: "Functions and Modelling",
  description: "Build and interpret linear, piecewise, quadratic, exponential, power, cubic and sinusoidal models; use technology to graph functions, find intercepts, intersections and extrema; and evaluate how well a model fits real data.",
  lessons: [lesson21, lesson22, lesson23],
};
