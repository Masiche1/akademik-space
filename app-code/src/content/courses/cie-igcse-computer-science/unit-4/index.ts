import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { lesson44 } from "./lesson-4-4.ts";

export const unit4: Unit = {
  id: "ciecs-u4",
  code: "4",
  title: "Programming Practice and Exam Technique",
  description:
    "Python practice for Paper 2, functions/strings/lists, problem-solving and testing strategy, and exam technique for both papers — Cambridge IGCSE Computer Science 0478.",
  lessons: [lesson41, lesson42, lesson43, lesson44],
};
