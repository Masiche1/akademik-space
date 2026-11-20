import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "olict-u1",
  code: "1",
  title: "ICT Systems and Components",
  description:
    "What ICT is, the components of an ICT system, and common input devices — Cambridge O Level ICT 7014 topic 1.",
  lessons: [lesson11, lesson12, lesson13],
};
