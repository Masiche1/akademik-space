import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "s7-u4",
  code: "4",
  title: "Capstone: Science Across Disciplines",
  description:
    "Connect cells, ecosystems, atoms, Earth systems, and scientific investigation to analyze real-world phenomena and evaluate evidence.",
  lessons: [lesson41, lesson42, lesson43],
};
