import type { Unit } from "../../../types.ts";
import { lessonp81 } from "./lesson-8-1.ts";
import { lessonp82 } from "./lesson-8-2.ts";
import { lessonp83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "ciep-u8",
  code: "8",
  title: "Thermal Physics",
  description:
    "Temperature, heat transfer, specific heat, latent heat, thermal expansion and insulation — Cambridge IGCSE Physics 0655.",
  lessons: [lessonp81, lessonp82, lessonp83],
};
