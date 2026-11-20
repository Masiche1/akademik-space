import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "edial-maths-u6",
  code: "6",
  title: "Statistics 1",
  description:
    "WST01 S1: summary statistics, probability, correlation and regression, discrete random variables and the normal distribution.",
  lessons: [lesson61, lesson62, lesson63],
};
