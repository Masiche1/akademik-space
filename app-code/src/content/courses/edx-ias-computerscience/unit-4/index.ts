import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "eiascs-u4",
  code: "4",
  title: "Programming in Practice",
  description:
    "9CP01 Unit 4: Programming languages, paradigms, IDEs, testing, requirements, design, iterative development.",
  lessons: [lesson41, lesson42, lesson43],
};
