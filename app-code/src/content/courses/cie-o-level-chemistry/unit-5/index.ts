import type { Unit } from "../../../types.ts";
import { lesson151 } from "./lesson-5-1.ts";
import { lesson152 } from "./lesson-5-2.ts";
import { lesson153 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "olchem-u5",
  code: "5",
  title: "Chemical Energetics",
  description:
    "Exothermic and endothermic reactions, bond energies, activation energy, calorimetry and Hess's law — Cambridge O Level Chemistry 5070.",
  lessons: [lesson151, lesson152, lesson153],
};
