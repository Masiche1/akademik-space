import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "olacc-u1",
  code: "1",
  title: "Introduction to Accounting",
  description:
    "The nature and purpose of accounting, the accounting equation and books of prime entry — Cambridge O Level Accounting 7706 topic 1.",
  lessons: [lesson11, lesson12, lesson13],
};
