import type { Unit } from "../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "chem10-u8",
  code: "8",
  title: "Reaction Stoichiometry and Kinetics",
  description:
    "Gas and solution stoichiometry, empirical/molecular formulas, reaction rates, rate laws, and chemical equilibrium.",
  lessons: [lesson81, lesson82, lesson83],
};
