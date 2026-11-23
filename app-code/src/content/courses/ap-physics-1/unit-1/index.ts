import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "app1-u1",
  code: "1",
  title: "Kinematics and Dynamics",
  description: "Motion in one and two dimensions, Newton's laws, circular motion, and gravitation.",
  lessons: [lesson11, lesson12, lesson13],
};
