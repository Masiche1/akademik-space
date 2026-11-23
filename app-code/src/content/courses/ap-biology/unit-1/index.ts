import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "apbio-u1",
  code: "1",
  title: "Cells, Chemistry of Life, and Energy",
  description: "Macromolecules, cell structure, membrane transport, photosynthesis, and cellular respiration.",
  lessons: [lesson11, lesson12, lesson13],
};
