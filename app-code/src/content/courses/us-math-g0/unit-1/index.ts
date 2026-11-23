import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";
import { lesson15 } from "./lesson-1-5.ts";

export const unit1: Unit = {
  id: "m0-u1",
  code: "1",
  title: "Counting to 100",
  description: "Count to 100 by ones and tens, count forward and backward, and write numbers 0-20.",
  lessons: [lesson11, lesson12, lesson13, lesson14, lesson15],
};
