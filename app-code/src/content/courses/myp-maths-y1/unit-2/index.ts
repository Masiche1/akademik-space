import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "mypm1-u2",
  code: "2",
  title: "Algebra",
  description: "Write, simplify and expand algebraic expressions, substitute into formulae, solve and form linear equations, investigate number patterns and nth terms, and use ratio and proportion to solve real-life problems.",
  lessons: [lesson21, lesson22, lesson23],
};
