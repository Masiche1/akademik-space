import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cieiacct-u1",
  code: "1",
  title: "The Purpose of Accounting",
  description:
    "Why businesses keep accounts, who uses accounting information and the concepts that govern its preparation — Cambridge IGCSE Accounting 0452.",
  lessons: [lesson11, lesson12, lesson13],
};
