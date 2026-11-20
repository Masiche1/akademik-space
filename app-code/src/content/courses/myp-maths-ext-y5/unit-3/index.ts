import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypme5-u3",
  code: "3",
  title: "Geometry, Trigonometry, Statistics and Probability",
  description: "Vector operations, scalar products and angles, 3D trigonometry, linear programming, graph theory and Eulerian paths, and binomial probability with statistical inference.",
  lessons: [lesson31, lesson32, lesson33],
};
