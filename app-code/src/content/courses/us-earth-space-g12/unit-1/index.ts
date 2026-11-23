import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";

export const unit1: Unit = {
  id: "ess12-u1",
  code: "1",
  title: "Earth's Systems and Interactions",
  description: "Investigate how Earth's systems interact and how human activities affect them.",
  lessons: [lesson11, lesson12, lesson13, lesson14],
};
