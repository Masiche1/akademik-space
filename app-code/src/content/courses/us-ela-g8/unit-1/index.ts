import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ela8-u1",
  code: "1",
  title: "Reading Literature",
  description:
    "Cite the strongest textual evidence, trace how themes develop, analyze dialogue, incidents, and word choice, and explain how structure, point of view, and traditional sources shape meaning in stories and drama.",
  lessons: [lesson11, lesson12, lesson13],
};
