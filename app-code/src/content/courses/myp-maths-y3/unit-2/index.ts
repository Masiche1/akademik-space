import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "mypm3-u2",
  code: "2",
  title: "Algebra",
  description: "Expand products of brackets and factorise expressions including monic quadratics, solve linear equations with unknowns on both sides and with brackets or fractions, solve and represent linear inequalities including compound inequalities, and find the nth term of linear and quadratic sequences.",
  lessons: [lesson21, lesson22, lesson23],
};
