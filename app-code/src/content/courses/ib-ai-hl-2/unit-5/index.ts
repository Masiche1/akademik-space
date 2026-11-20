import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";
import { lesson54 } from "./lesson-5-4.ts";

export const unit5: Unit = {
  id: "aihl-u5",
  code: "5",
  title: "Further Statistics and Probability",
  description: "Combine random variables, model rare events with the Poisson distribution, estimate and test hypotheses, analyse long-term behaviour with Markov chains, and evaluate data collection design, reliability and validity.",
  lessons: [lesson51, lesson52, lesson53, lesson54],
};
