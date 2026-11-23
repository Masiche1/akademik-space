import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "apsa-u1",
  code: "1",
  title: "Foundations of Visual Art",
  description: "Elements, principles, and visual analysis fundamentals.",
  lessons: [lesson11, lesson12, lesson13],
};
