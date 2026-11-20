import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson46 } from "./lesson-4-6.ts";

export const unit4: Unit = {
  id: "ciam-u4",
  code: "4",
  title: "Series and Sequences",
  description: "Arithmetic and geometric series, recurrence relations and convergence.",
  lessons: [lesson41, lesson46],
};
