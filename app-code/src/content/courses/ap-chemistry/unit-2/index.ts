import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "apch-u2",
  code: "2",
  title: "Chemical Reactions, Kinetics, and Equilibrium",
  description: "Reaction types, stoichiometry, rate laws, equilibrium, and acid-base chemistry.",
  lessons: [lesson21, lesson22, lesson23],
};
