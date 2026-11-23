import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "edm10-u7",
  code: "7",
  title: "Further Statistics and Probability",
  description:
    "Quartiles, the interquartile range, box plots and outliers; scatter graphs, correlation and lines of best fit; two-way tables and relative frequency; expected frequency and combined and conditional probability.",
  lessons: [lesson71, lesson72, lesson73],
};
