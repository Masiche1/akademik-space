import type { Unit } from "../../../types.ts";
import { lesson111 } from "./lesson-1-1.ts";
import { lesson112 } from "./lesson-1-2.ts";
import { lesson113 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cial-p-unit-1",
  code: "1",
  title: "Mechanics: Kinematics, Dynamics and Gravitation",
  description:
    "Kinematics, Newton's laws, momentum, circular motion and gravitational fields.",
  lessons: [lesson111, lesson112, lesson113],
};
