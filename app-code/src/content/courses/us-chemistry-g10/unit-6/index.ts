import type { Unit } from "../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "chem10-u6",
  code: "6",
  title: "Atomic Structure and the Periodic Table",
  description:
    "Electron configuration, periodic trends, isotopes and average atomic mass, nuclear decay, half-life, and chemical families.",
  lessons: [lesson61, lesson62, lesson63],
};
