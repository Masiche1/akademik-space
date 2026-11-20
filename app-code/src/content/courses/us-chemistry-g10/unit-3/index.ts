import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "chem10-u3",
  code: "3",
  title: "Chemical Reactions and Stoichiometry",
  description: "Balance chemical equations, classify reactions and predict products, use the mole to connect mass and particles, find formulas, and calculate reactant and product amounts including limiting reactants and percent yield.",
  lessons: [lesson31, lesson32, lesson33],
};
