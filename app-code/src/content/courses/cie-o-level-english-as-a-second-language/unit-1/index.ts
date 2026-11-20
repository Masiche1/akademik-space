import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "oles-u1",
  code: "1",
  title: "Reading Comprehension Skills",
  description:
    "Literal and inferred meaning, vocabulary in context, text structure and identifying the main ideas of unseen texts — Cambridge O Level ESL 1120.",
  lessons: [lesson11, lesson12, lesson13],
};
