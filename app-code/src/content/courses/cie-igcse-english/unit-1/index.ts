import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ciege-u1",
  code: "1",
  title: "Reading Comprehension",
  description: "Literal and inferred comprehension, vocabulary in context, summary and sequencing for IGCSE Paper 2.",
  lessons: [lesson11, lesson12, lesson13],
};
