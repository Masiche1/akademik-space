import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edm8-u2",
  code: "2",
  title: "Algebra",
  description: "Simplify, expand and factorise expressions, substitute into formulae, solve equations and inequalities, and work with sequences and straight-line graphs.",
  lessons: [lesson21, lesson22, lesson23],
};
