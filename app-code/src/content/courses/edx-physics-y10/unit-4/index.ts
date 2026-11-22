import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "eph10-u4",
  code: "4",
  title: "Investigative and Practical Skills",
  description:
    "Measurement and uncertainty, electrical circuits, motion and forces, waves, light and radioactivity.",
  lessons: [lesson41, lesson42, lesson43],
};
