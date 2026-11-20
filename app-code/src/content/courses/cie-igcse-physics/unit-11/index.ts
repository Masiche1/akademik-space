import type { Unit } from "../../../types.ts";
import { lessonp111 } from "./lesson-11-1.ts";
import { lessonp112 } from "./lesson-11-2.ts";
import { lessonp113 } from "./lesson-11-3.ts";

export const unit11: Unit = {
  id: "ciep-u11",
  code: "11",
  title: "Measurement and Practical Physics",
  description:
    "Measurement, uncertainty, practical skills and required practical investigations — Cambridge IGCSE Physics 0655.",
  lessons: [lessonp111, lessonp112, lessonp113],
};
