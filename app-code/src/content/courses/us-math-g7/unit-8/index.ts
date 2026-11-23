import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "m7-u8",
  code: "8",
  title: "Statistics and Probability in Depth",
  description:
    "Deepen statistical and probabilistic reasoning: measures of center and spread, distributions, theoretical and experimental probability, expected value, and real-world applications.",
  lessons: [lesson81, lesson82, lesson83],
};
