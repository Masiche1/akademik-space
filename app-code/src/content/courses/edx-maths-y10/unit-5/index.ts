import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edm10-u5",
  code: "5",
  title: "Indices, Sequences and Functions",
  description:
    "Index laws including fractional and negative indices; arithmetic and geometric sequences; function notation and linear, quadratic and reciprocal graphs.",
  lessons: [lesson51, lesson52, lesson53],
};
