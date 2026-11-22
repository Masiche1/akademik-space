import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ela9-u1",
  code: "1",
  title: "Reading Literature",
  description:
    "Cite strong and thorough evidence, trace how themes develop and write objective summaries, analyze complex characters and the cumulative impact of word choice, and explain how structure, time, and cultural point of view shape meaning in literature.",
  lessons: [lesson11, lesson12, lesson13],
};
