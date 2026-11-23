import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "s7-u1",
  code: "1",
  title: "Life Science: Cells, Organisms and Ecosystems",
  description:
    "Explore cells and their organelles, use microscopes and magnification, see how body systems work together and how photosynthesis and cellular respiration move energy, and analyze how energy and matter flow through ecosystems.",
  lessons: [lesson11, lesson12, lesson13],
};
