import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "chemsl-u5",
  code: "5",
  number: 5,
  title: "Energetics and Kinetics",
  description: "Apply enthalpy changes and Hess's law to reaction calculations, measure enthalpy changes by calorimetry, estimate enthalpy from bond enthalpies, and explain reaction rates using collision theory and rate graphs.",
  lessons: [lesson51, lesson52, lesson53],
};
