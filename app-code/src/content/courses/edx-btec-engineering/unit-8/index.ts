import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "edxbteceng-u8",
  code: "8",
  number: 8,
  title: "Unit 8: Engineering Metrology and Inspection",
  description:
    "Precision measurement, geometric dimensioning and tolerancing, inspection methods and statistical process control for engineering quality.",
  lessons: [lesson81, lesson82, lesson83],
};
