import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "apel-u1",
  code: "1",
  title: "Rhetorical Analysis",
  description: "Identify and analyze claims, evidence, appeals, and stylistic choices in nonfiction texts.",
  lessons: [lesson11, lesson12, lesson13],
};
