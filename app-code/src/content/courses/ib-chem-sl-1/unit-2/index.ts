import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "chemsl-u2",
  code: "2",
  title: "Atomic Structure and the Periodic Table",
  description: "Describe subatomic particles, atomic and mass numbers, isotopes and relative atomic mass; write electron configurations and explain the organisation and trends of the periodic table.",
  lessons: [lesson21, lesson22, lesson23],
};
