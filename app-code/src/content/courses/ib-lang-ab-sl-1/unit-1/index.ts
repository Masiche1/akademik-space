import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "langab-u1",
  code: "1",
  title: "Basic Communication",
  description: "Learn greetings, introductions, personal information, numbers, dates, time and simple question and answer patterns.",
  lessons: [lesson11, lesson12, lesson13],
};
