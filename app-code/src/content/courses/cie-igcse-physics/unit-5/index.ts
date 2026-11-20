import type { Unit } from "../../../types.ts";
import { lessonp51 } from "./lesson-5-1.ts";
import { lessonp52 } from "./lesson-5-2.ts";
import { lessonp53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "ciep-u5",
  code: "5",
  title: "Light",
  description:
    "Reflection, refraction, lenses, the human eye and vision defects — Cambridge IGCSE Physics 0655.",
  lessons: [lessonp51, lessonp52, lessonp53],
};
