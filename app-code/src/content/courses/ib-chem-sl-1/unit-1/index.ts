import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "chemsl-u1",
  code: "1",
  title: "Stoichiometry",
  description: "Use the mole concept, molar mass and Avogadro's constant; find empirical and molecular formulae; and carry out stoichiometric calculations from balanced chemical equations.",
  lessons: [lesson11, lesson12, lesson13],
};
