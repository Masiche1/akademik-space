import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "physhl-u2",
  code: "2",
  title: "Thermodynamics — HL Extension",
  description: "Additional higher level detail of the first law of thermodynamics, internal energy, heat engines, entropy and the second law of thermodynamics, and the Carnot cycle.",
  lessons: [lesson21, lesson22, lesson23],
};
