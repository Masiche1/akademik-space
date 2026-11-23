import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";
import { lesson15 } from "./lesson-1-5.ts";

export const unit1: Unit = {
  id: "m2-u1",
  code: "1",
  title: "Place Value to 100",
  description: "Count within 1000, skip-count, and understand tens and ones.",
  lessons: [lesson11, lesson12, lesson13, lesson14, lesson15],
};
