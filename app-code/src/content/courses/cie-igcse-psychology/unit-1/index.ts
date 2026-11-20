import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cieipsych-u1",
  code: "1",
  title: "Perspectives on Psychology",
  description:
    "What psychology studies, nature vs nurture, and the major approaches — Cambridge IGCSE Psychology 0266.",
  lessons: [lesson11, lesson12, lesson13],
};
