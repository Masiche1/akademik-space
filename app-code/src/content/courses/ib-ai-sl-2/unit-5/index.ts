import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "aisl-u5",
  code: "5",
  title: "Probability",
  description: "Work with theoretical and experimental probability, conditional probability, discrete random variables, the binomial distribution and the normal distribution.",
  lessons: [lesson51, lesson52, lesson53],
};
