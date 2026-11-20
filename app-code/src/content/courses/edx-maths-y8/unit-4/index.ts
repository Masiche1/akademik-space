import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edm8-u4",
  code: "4",
  title: "Statistics and Probability",
  description: "Calculate and compare averages, draw and read charts, interpret scatter graphs, and work out probabilities using sample spaces and relative frequency.",
  lessons: [lesson41, lesson42, lesson43],
};
