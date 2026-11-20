import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "tok-u1",
  code: "1",
  title: "Ways of Knowing",
  description: "Examine how humans acquire knowledge through the senses, imagination, reason, intuition, memory, language, emotion and faith — and evaluate the strengths and limitations of each.",
  lessons: [lesson11, lesson12, lesson13],
};
