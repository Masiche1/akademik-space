import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "biosl-u1",
  number: 1,
  code: "1",
  title: "Cell Biology",
  description: "Eukaryotic and prokaryotic cell ultrastructure, membrane transport and water potential, enzyme action, and the cell cycle including mitosis.",
  lessons: [lesson11, lesson12, lesson13],
};
