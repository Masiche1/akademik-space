import type { Unit } from "../../../types.ts";
import { lessonp61 } from "./lesson-6-1.ts";
import { lessonp62 } from "./lesson-6-2.ts";
import { lessonp63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "ciep-u6",
  code: "6",
  title: "Electricity and Magnetism",
  description:
    "Current, voltage, resistance, circuits, power, magnetism and electromagnetic induction — Cambridge IGCSE Physics 0655.",
  lessons: [lessonp61, lessonp62, lessonp63],
};
