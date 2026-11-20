import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cipup-u1",
  code: "1",
  title: "Mechanics, Waves and Electromagnetism",
  description:
    "Kinematics, dynamics, oscillations, waves, circuits and electromagnetic induction — Cambridge Pre-U Physics 9792.",
  lessons: [lesson11, lesson12, lesson13],
};
