import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edial-maths-u5",
  code: "5",
  title: "Mechanics 1",
  description:
    "WME01 M1: vectors in mechanics, kinematics with constant acceleration, dynamics with Newton's laws, friction and momentum, and statics with moments.",
  lessons: [lesson51, lesson52, lesson53],
};
