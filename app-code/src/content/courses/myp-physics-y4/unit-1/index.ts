import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "mypp4-unit-1",
  number: 1,
  code: "1",
  title: "Motion and Forces",
  description:
    "Speed, velocity and acceleration; distance-time and velocity-time graphs; Newton's laws, momentum, pressure and moments.",
  lessons: [lesson11, lesson12, lesson13],
};
