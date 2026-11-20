import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edialfm-u4",
  code: "4",
  title: "Mechanics 1",
  description:
    "WME01 M1: vectors in mechanics, kinematics with constant acceleration, dynamics with Newton's laws, friction and momentum, and statics with moments.",
  lessons: [lesson41, lesson42, lesson43],
};
