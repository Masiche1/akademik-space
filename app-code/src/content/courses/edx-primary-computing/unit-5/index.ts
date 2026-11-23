import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edxpc-u5",
  code: "5",
  title: "Programming and Computational Thinking",
  description:
    "Primary computing: decomposition, pattern recognition, abstraction, algorithms, sequencing, selection, iteration and debugging.",
  lessons: [lesson51, lesson52, lesson53],
};
