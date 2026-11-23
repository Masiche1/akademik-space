import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "m11-u2",
  code: "2",
  title: "Quadratic Functions",
  description: "Graph and analyze quadratics in standard, vertex and factored form using completing the square and the quadratic formula.",
  lessons: [lesson21, lesson22, lesson23],
};
