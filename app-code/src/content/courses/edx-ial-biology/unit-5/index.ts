import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edialbio-u5",
  code: "5",
  title: "Practical Skills in Biology I",
  description: "WBI13: planning, measurement, data handling and evaluation for the Unit 1 and Unit 2 biology core practicals.",
  lessons: [lesson51, lesson52, lesson53],
};
