import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "olep-unit-1",
  code: "1",
  title: "Approaches to Psychology",
  description:
    "Behaviourist, cognitive, psychodynamic, humanistic, biological and social approaches, plus developmental psychology.",
  lessons: [lesson11, lesson12, lesson13],
};
