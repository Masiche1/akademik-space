import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "ech10-u8",
  code: "8",
  title: "Physical Chemistry: Energetics, Rates and Equilibrium",
  description:
    "Exothermic and endothermic reactions and energy profiles, calorimetry and bond energies; collision theory and factors affecting rate; reversible reactions, Le Chatelier's principle and the Haber process.",
  lessons: [lesson81, lesson82, lesson83],
};
