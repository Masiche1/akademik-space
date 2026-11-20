import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "cialfm-u8",
  code: "8",
  title: "Probability and Statistics",
  description: "Continuous random variables, expectation and variance, chi-squared tests, regression and correlation — Paper 5.",
  lessons: [lesson81, lesson82, lesson83],
};
