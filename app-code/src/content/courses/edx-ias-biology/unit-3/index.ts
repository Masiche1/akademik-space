import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ediasbio-u3",
  code: "3",
  title: "Practical Skills in Biology I",
  description: "WBI13: planning, measurement, data handling and evaluation for the Unit 1 and Unit 2 biology core practicals.",
  lessons: [lesson31, lesson32, lesson33],
};
