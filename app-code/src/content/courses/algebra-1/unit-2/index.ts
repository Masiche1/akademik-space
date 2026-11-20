import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "alg1-u2",
  code: "2",
  title: "Systems of Equations and Inequalities",
  description: "Solve linear systems using graphing, substitution, and elimination, then model constraints with linear inequalities and feasible regions.",
  lessons: [lesson21, lesson22, lesson23],
};
