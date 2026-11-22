import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ela7-u1",
  code: "1",
  title: "Reading Literature",
  description:
    "Cite textual evidence, determine theme, analyze setting and figurative language, and explain how point of view and structure shape meaning in stories, poems, and drama.",
  lessons: [lesson11, lesson12, lesson13],
};
