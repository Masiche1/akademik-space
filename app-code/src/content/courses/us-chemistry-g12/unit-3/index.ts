import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "chem12-u3",
  code: "3",
  title: "Reaction Kinetics and Equilibrium",
  description: "Explore reaction rates, equilibrium, acids and bases.",
  lessons: [lesson31, lesson32, lesson33],
};
