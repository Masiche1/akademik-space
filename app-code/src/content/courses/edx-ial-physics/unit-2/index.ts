import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edialphys-u2",
  code: "2",
  title: "Waves and Electricity",
  description:
    "WPH12: wave properties (reflection, refraction, diffraction), the EM spectrum, interference and standing waves, and electric fields and circuits.",
  lessons: [lesson21, lesson22, lesson23],
};
