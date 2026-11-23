import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";

export const unit2: Unit = {
  id: "app2-u2",
  code: "2",
  title: "Electricity, Magnetism, and Electromagnetic Waves",
  description: "Electric fields and potential, capacitance, circuits with RC, magnetic fields, and EM waves.",
  lessons: [lesson21, lesson22],
};
