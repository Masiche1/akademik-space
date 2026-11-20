import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypme4-u3",
  code: "3",
  title: "Geometry, Trigonometry, Statistics and Probability",
  description: "Work with 2D vectors and 3D trigonometry, apply linear programming and discrete mathematics to networks, and extend statistics and probability to regression, conditional probability and expected value.",
  lessons: [lesson31, lesson32, lesson33],
};
