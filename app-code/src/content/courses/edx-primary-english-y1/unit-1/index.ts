import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edpe1-u1",
  code: "1",
  title: "Phonics and Early Reading",
  description:
    "Letter sounds, blending and segmenting CVC words, digraphs, tricky words, initial sounds, rhyming and reading simple sentences.",
  lessons: [lesson11, lesson12, lesson13],
};
