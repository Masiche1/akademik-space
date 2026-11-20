import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "aihl-u6",
  code: "6",
  title: "Further Calculus and Differential Equations",
  description: "Extend differentiation and integration, find volumes of revolution, and model change with kinematics, separable equations, Euler's method and coupled systems.",
  lessons: [lesson61, lesson62, lesson63],
};
