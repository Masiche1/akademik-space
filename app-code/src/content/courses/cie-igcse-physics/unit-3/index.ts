import type { Unit } from "../../../types.ts";
import { lessonp31 } from "./lesson-3-1.ts";
import { lessonp32 } from "./lesson-3-2.ts";
import { lessonp33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ciep-u3",
  code: "3",
  title: "Energy",
  description:
    "Work, energy transfers, kinetic and potential energy, power, efficiency and energy conservation — Cambridge IGCSE Physics 0655.",
  lessons: [lessonp31, lessonp32, lessonp33],
};
