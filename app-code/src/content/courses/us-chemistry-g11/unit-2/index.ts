import type { Unit } from "../../../types.ts";
import { lesson121 } from "./lesson-2-1.ts";
import { lesson122 } from "./lesson-2-2.ts";
import { lesson123 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "chem11-u2",
  code: "2",
  title: "Reaction Kinetics and Equilibrium",
  description: "Explore collision theory, rate laws and reaction order, then master chemical equilibrium: Kc expressions, Q predictions, Le Chatelier's principle and industrial trade-offs.",
  lessons: [lesson121, lesson122, lesson123],
};
