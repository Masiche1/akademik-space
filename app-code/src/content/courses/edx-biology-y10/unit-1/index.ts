import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ebi10-u1",
  code: "1",
  title: "Organisms and Life Processes",
  description: "Study the characteristics and variety of living organisms, cell structure and stem cells, biological molecules and enzymes, and how substances move by diffusion, osmosis and active transport.",
  lessons: [lesson11, lesson12, lesson13],
};
