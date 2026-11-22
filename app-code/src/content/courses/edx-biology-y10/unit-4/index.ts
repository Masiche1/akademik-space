import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ebi10-u4",
  code: "4",
  title: "Investigative and Practical Skills",
  description:
    "Microscopy and food tests, enzyme and ecology investigations, physiological measurements and gas exchange experiments.",
  lessons: [lesson41, lesson42, lesson43],
};
