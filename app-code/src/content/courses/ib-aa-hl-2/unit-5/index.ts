import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "aahl-u5",
  code: "5",
  title: "Further Differential Calculus",
  description:
    "Study continuity, differentiability and limits, differentiate from first principles, extend the table of derivatives, use implicit differentiation, and solve related rates and optimization problems.",
  lessons: [lesson51, lesson52, lesson53],
};
