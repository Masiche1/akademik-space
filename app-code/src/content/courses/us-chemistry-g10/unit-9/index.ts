import type { Unit } from "../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";

export const unit9: Unit = {
  id: "chem10-u9",
  code: "9",
  title: "Physical Chemistry Applications",
  description:
    "Enthalpy and calorimetry, acids and bases, titration, buffers, solution concentrations, colligative properties, and gas laws.",
  lessons: [lesson91, lesson92, lesson93],
};
