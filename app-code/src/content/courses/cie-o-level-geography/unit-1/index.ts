import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "oleg-unit-1",
  code: "1",
  title: "Physical Geography",
  description:
    "River processes and landforms, coastal processes and landforms, weather elements, climate types and human influence on climate.",
  lessons: [lesson11, lesson12, lesson13],
};
