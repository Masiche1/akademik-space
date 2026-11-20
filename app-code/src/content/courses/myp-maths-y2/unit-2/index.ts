import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "mypm2-u2",
  code: "2",
  title: "Algebra and Graphs",
  description: "Expand and factorise expressions and justify algebraic identities, solve equations and inequalities including those from real-life contexts, and work with coordinates, gradient and linear graphs to model rates of change.",
  lessons: [lesson21, lesson22, lesson23],
};
