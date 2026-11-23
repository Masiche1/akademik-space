import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ecs10-u4",
  code: "4",
  title: "Boolean Logic and Logic Gates",
  description:
    "Truth tables, Boolean operators, logic gates, circuits, Boolean laws and control-system applications.",
  lessons: [lesson41, lesson42, lesson43],
};
