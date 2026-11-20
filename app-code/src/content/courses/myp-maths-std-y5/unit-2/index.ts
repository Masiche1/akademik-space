import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "mypms5-u2",
  code: "2",
  title: "Functions and Algebraic Modelling",
  description: "Work with functions, domain and range, linear equations and graphs, simultaneous equations, quadratics, sequences, transformations, and exponential growth and decay models.",
  lessons: [lesson21, lesson22, lesson23],
};
