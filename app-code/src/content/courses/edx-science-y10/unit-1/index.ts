import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "esc10-u1",
  code: "1",
  title: "Biology",
  description:
    "Cell structure and microscopy, biological molecules and enzymes, photosynthesis and respiration.",
  lessons: [lesson11, lesson12, lesson13],
};
