import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "aasl-u2",
  code: "2",
  title: "Functions",
  description: "Study lines, function notation, domain and range, composite and inverse functions, quadratic and rational functions, exponential and logarithmic functions, and transformations of graphs.",
  lessons: [lesson21, lesson22, lesson23],
};
