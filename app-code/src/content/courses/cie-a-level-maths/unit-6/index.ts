import type { Unit } from "../../../types.ts";
import { lesson611 } from "./lesson-6-1.ts";
import { lesson612 } from "./lesson-6-2.ts";
import { lesson613 } from "./lesson-6-3.ts";
import { lesson64 } from "./lesson-6-4.ts";

export const unit6: Unit = {
  id: "cial-m-unit-6",
  code: "6",
  title: "Probability and Statistics",
  description:
    "Probability rules, discrete random variables, binomial and normal distributions, hypothesis testing and correlation/regression.",
  lessons: [lesson611, lesson612, lesson613, lesson64],
};
