import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edias-maths-u4",
  code: "4",
  title: "Statistics 1",
  description:
    "WST01 S1: summary statistics, probability, correlation and regression, discrete random variables and the normal distribution.",
  lessons: [lesson41, lesson42, lesson43],
};
