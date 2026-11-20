import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "aihl-u2",
  code: "2",
  title: "Advanced Functions and Modelling",
  description:
    "Combine, invert and transform functions, build exponential, logistic, piecewise, rational and sinusoidal models, and use logarithms and R squared to linearize data and choose the best model.",
  lessons: [lesson21, lesson22, lesson23],
};
