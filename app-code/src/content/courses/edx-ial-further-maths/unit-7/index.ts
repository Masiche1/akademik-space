import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "edialfm-u7",
  code: "7",
  title: "Statistics 1",
  description:
    "WST01 S1: summary statistics, probability, correlation and regression, discrete random variables and the normal distribution.",
  lessons: [lesson71, lesson72, lesson73],
};
