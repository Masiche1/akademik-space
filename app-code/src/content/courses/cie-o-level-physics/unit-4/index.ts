import type { Unit } from "../../../types.ts";
import { lessonp41 } from "./lesson-4-1.ts";
import { lessonp42 } from "./lesson-4-2.ts";
import { lessonp43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "olphys-u4",
  code: "4",
  title: "Waves",
  description:
    "Wave properties, sound waves, light waves and the electromagnetic spectrum — Cambridge O Level Physics 5054.",
  lessons: [lessonp41, lessonp42, lessonp43],
};
