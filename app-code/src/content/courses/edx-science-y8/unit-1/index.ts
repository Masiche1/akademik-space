import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "esc8-u1",
  code: "1",
  title: "Biology: Cells, Organisms and Ecosystems",
  description: "Study plant and animal cells, use a microscope and calculate magnification, explain how cells are organised into systems and how diffusion works, and investigate energy transfer and adaptation in ecosystems.",
  lessons: [lesson11, lesson12, lesson13],
};
