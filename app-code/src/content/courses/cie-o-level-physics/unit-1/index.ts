import type { Unit } from "../../../types.ts";
import { lessonp11 } from "./lesson-1-1.ts";
import { lessonp12 } from "./lesson-1-2.ts";
import { lessonp13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "olphys-u1",
  code: "1",
  title: "Motion",
  description:
    "Speed, velocity, acceleration, scalars, vectors, free fall, suvat equations and motion graphs — Cambridge O Level Physics 5054.",
  lessons: [lessonp11, lessonp12, lessonp13],
};
