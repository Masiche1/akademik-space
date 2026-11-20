import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "aasl-u4",
  code: "4",
  title: "Statistics and Probability",
  description: "Summarise and model data with measures of centre and spread, correlation and regression; use conditional probability, discrete random variables, and the binomial and normal distributions.",
  lessons: [lesson41, lesson42, lesson43],
};
