import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "bus-u5",
  code: "5",
  title: "Human Resources in Practice",
  description: "The recruitment and selection process in detail, training and development, industrial relations and trade unions, remuneration and performance appraisal.",
  lessons: [lesson51, lesson52, lesson53],
};
