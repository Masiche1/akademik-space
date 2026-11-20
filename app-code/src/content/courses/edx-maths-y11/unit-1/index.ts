import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edm11-u1",
  code: "1",
  title: "Sequences, Functions and Graphs",
  description: "Find the nth term of linear and quadratic sequences, sum arithmetic series, work with graphs, function notation and inverse functions, and use differentiation for gradients, turning points and kinematics.",
  lessons: [lesson11, lesson12, lesson13],
};
