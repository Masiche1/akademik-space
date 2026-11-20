import type { Unit } from "../../../types.ts";
import { lessonp21 } from "./lesson-2-1.ts";
import { lessonp22 } from "./lesson-2-2.ts";
import { lessonp23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "olphys-u2",
  code: "2",
  title: "Forces",
  description:
    "Forces, momentum, pressure, density, Newton's laws, friction, moments, centre of gravity and hydraulics — Cambridge O Level Physics 5054.",
  lessons: [lessonp21, lessonp22, lessonp23],
};
