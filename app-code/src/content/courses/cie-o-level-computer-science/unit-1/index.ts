import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "olcs-u1",
  code: "1",
  title: "Data Representation",
  description:
    "Number systems, representing text/sound/images, data storage units and compression — Cambridge O Level Computer Science 2210 topic 1.",
  lessons: [lesson11, lesson12, lesson13],
};
