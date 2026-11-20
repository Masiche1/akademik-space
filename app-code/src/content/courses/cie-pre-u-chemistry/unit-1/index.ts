import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cipuc-u1",
  code: "1",
  title: "Physical Chemistry: Structure, Stoichiometry and Reactions",
  description:
    "Atomic structure and bonding, mole calculations and energetics, kinetics, equilibria and acid–base chemistry — Cambridge Pre-U Chemistry 9791.",
  lessons: [lesson11, lesson12, lesson13],
};
