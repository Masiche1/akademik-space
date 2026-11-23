import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";
import { lesson15 } from "./lesson-1-5.ts";

export const unit1: Unit = {
  id: "mpk-u1",
  code: "1",
  title: "Counting and Comparing",
  description: "Count objects to 10, match one-to-one, and compare groups as more, fewer or the same.",
  lessons: [lesson11, lesson12, lesson13, lesson14, lesson15],
};
