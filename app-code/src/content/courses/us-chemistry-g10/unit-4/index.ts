import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "chem10-u4",
  code: "4",
  title: "Solutions, Rates, Equilibrium and Acids",
  description: "Calculate concentrations and dilutions, measure energy changes in reactions, explain rates with collision theory, predict shifts in equilibrium, and work with pH, neutralization and titrations.",
  lessons: [lesson41, lesson42, lesson43],
};
