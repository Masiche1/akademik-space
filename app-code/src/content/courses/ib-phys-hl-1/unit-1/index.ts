import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "physhl-u1",
  code: "1",
  title: "Relativity and Rigid Body Mechanics — HL Extension",
  description:
    "Additional higher level detail of Galilean and special relativity including time dilation and length contraction, and rigid body mechanics including torque, moment of inertia and angular momentum.",
  lessons: [lesson11, lesson12, lesson13],
};
