import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edialfm-u5",
  code: "5",
  title: "Mechanics 2",
  description:
    "WME02 M2: kinematics with variable acceleration, work-energy-power methods, impulse-momentum and collisions with restitution.",
  lessons: [lesson51, lesson52, lesson53],
};
