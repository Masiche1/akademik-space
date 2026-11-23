import type { Unit } from "../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "s8-u5",
  code: "5",
  title: "Physical Science Deep Dive: Forces and Motion",
  description:
    "Explore speed, velocity, acceleration, Newton's laws, friction, gravity and real-world motion problems.",
  lessons: [lesson51, lesson52, lesson53],
};
