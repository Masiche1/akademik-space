import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "alg1-u5",
  code: "5",
  title: "Statistics and Data Analysis",
  description: "Analyze distributions with numerical summaries and box plots, interpret categorical data with two-way tables, and use scatter plots, linear models, correlation, and residuals to describe quantitative relationships responsibly.",
  lessons: [lesson51, lesson52, lesson53],
};
