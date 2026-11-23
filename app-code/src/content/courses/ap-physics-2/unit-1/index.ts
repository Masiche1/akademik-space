import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";

export const unit1: Unit = {
  id: "app2-u1",
  code: "1",
  title: "Fluids and Thermodynamics",
  description: "Fluid statics and dynamics, heat transfer, ideal gas laws, and thermodynamic processes.",
  lessons: [lesson11, lesson12],
};
