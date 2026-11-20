import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "olcs-u8",
  code: "8",
  title: "Programming",
  description:
    "Programming concepts, arrays and file handling — Cambridge O Level Computer Science 2210 topic 8.",
  lessons: [lesson81, lesson82, lesson83],
};
