import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "eph11-u4",
  code: "4",
  title: "Investigative and Practical Skills",
  description:
    "Thermal physics and gas laws, electromagnetism and transformers, nuclear and astrophysics, energy transfers and domestic electricity.",
  lessons: [lesson41, lesson42, lesson43],
};
