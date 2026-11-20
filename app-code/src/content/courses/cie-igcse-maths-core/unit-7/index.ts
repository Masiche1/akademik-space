import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";

export const unit7: Unit = {
  id: "cimg-u7",
  code: "7",
  title: "Probability",
  description: "Basic probability, combined events, tree diagrams and conditional probability.",
  lessons: [lesson71, lesson72],
};
