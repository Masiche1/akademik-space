import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "cialfm-u7",
  code: "7",
  title: "Mechanics",
  description: "Constant-acceleration and projectile kinematics, Newton's laws with friction, connected particles, momentum, energy and circular motion — Paper 4.",
  lessons: [lesson71, lesson72, lesson73],
};
