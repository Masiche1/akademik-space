import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "aasl-u6",
  code: "6",
  title: "Integral Calculus",
  description: "Find antiderivatives and use boundary conditions, evaluate definite integrals, calculate areas under and between curves, and apply integration to kinematics and multi-step problems.",
  lessons: [lesson61, lesson62, lesson63],
};
