import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "esc9-u2",
  code: "2",
  title: "Chemistry: Atoms and the Periodic Table",
  description: "Describe the structure of atoms and electron arrangements, use the periodic table to explain trends in Groups 1, 7 and 0, and use the reactivity series to predict the reactions of metals.",
  lessons: [lesson21, lesson22, lesson23],
};
