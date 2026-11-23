import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edxbteceng-u5",
  code: "5",
  number: 5,
  title: "Unit 5: Thermal and Fluid Power Principles",
  description:
    "Thermodynamics and fluid mechanics applied to engineering: heat capacity and heat transfer, fluid pressure and hydrostatics, flow rate, Bernoulli's principle and hydraulic power transmission.",
  lessons: [lesson51, lesson52, lesson53],
};
