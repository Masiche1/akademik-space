import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edias-maths-u3",
  code: "3",
  title: "Mechanics 1",
  description:
    "WME01 M1: vectors in mechanics, kinematics with constant acceleration, dynamics with Newton's laws, friction and momentum, and statics with moments.",
  lessons: [lesson31, lesson32, lesson33],
};
