import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "bio9-u1",
  code: "1",
  title: "Cells and Biomolecules",
  description: "Explore the molecules of life and the enzymes that speed up reactions, compare prokaryotic and eukaryotic cells, see how substances cross the cell membrane, and learn how feedback keeps organisms stable and organized.",
  lessons: [lesson11, lesson12, lesson13],
};
