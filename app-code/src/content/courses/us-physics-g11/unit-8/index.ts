import type { Unit } from "../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "phys11-u8",
  code: "8",
  title: "Energy Deep Dive",
  description:
    "Work, power, kinetic/potential energy, conservation, efficiency, thermal energy, calorimetry, and phase changes.",
  lessons: [lesson81, lesson82, lesson83],
};
