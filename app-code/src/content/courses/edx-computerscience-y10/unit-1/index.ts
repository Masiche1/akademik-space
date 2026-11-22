import type { Unit } from "../../../types.ts";
import { lesson201 } from "./lesson-1-1.ts";
import { lesson202 } from "./lesson-1-2.ts";
import { lesson203 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ecs10-u1",
  code: "1",
  title: "Computer Systems",
  description:
    "Data representation, hardware components, software, networks and online safety.",
  lessons: [lesson201, lesson202, lesson203],
};
