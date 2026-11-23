import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";
import { lesson84 } from "./lesson-8-4.ts";
import { lesson85 } from "./lesson-8-5.ts";

export const unit8: Unit = {
  id: "m1-u8",
  code: "8",
  title: "Grade 1 Math Review",
  description: "Mixed review of all Grade 1 math topics.",
  lessons: [lesson81, lesson82, lesson83, lesson84, lesson85],
};
