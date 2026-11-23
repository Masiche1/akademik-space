import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "apst-u2",
  code: "2",
  title: "Probability and Sampling Distributions",
  description: "Probability rules, random variables, expected value, and sampling distributions of proportions and means.",
  lessons: [lesson21, lesson22, lesson23],
};
