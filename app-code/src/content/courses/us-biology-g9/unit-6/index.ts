import type { Unit } from "../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "bio9-u6",
  code: "6",
  title: "Cell Biology Deep Dive",
  description:
    "Prokaryotic/eukaryotic cells, organelles, membrane transport, enzymes, homeostasis, differentiation and the cell cycle.",
  lessons: [lesson61, lesson62, lesson63],
};
