import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { lesson44 } from "./lesson-4-4.ts";

export const unit4: Unit = {
  id: "aahl-u4",
  code: "4",
  title: "Further Probability and Statistics",
  description:
    "Apply Bayes' theorem, use conditional probability formulae and test for independence, standardise normal variables with unknown parameters, work with expectation and variance of transformed variables, analyse continuous random variables through probability density functions, and combine binomial and normal models in multi-stage problems.",
  lessons: [lesson41, lesson42, lesson43, lesson44],
};
