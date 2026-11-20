import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "mypms4-u2",
  code: "2",
  title: "Functions and Algebra",
  description: "Use function notation, domain and range; find equations of linear, parallel and perpendicular lines; solve simultaneous equations; and complete the square and work with arithmetic, geometric and quadratic sequences.",
  lessons: [lesson21, lesson22, lesson23],
};
