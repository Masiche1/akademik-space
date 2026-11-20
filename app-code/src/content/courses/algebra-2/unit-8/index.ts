import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "alg2-u8",
  code: "8",
  title: "Probability and Statistical Inference",
  description: "Use probability rules and counting methods, interpret normal distributions, and evaluate studies and statistical claims with sound sampling and simulation reasoning.",
  lessons: [lesson81, lesson82, lesson83],
};
