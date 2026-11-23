import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "apst-u1",
  code: "1",
  title: "Exploring Data",
  description: "Summarize distributions with statistics and graphs, compare groups, and interpret associations.",
  lessons: [lesson11, lesson12, lesson13],
};
