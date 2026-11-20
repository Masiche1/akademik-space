import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ediaschem-u1",
  code: "1",
  title: "Structure, Bonding and Introduction to Organic Chemistry",
  description:
    "WCH11: atomic structure, periodicity, ionic/covalent/metallic bonding, stoichiometry (the mole), energetics and an introduction to organic chemistry.",
  lessons: [lesson11, lesson12, lesson13],
};
