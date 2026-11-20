import type { Unit } from "../../../types.ts";
import { lesson131 } from "./lesson-3-1.ts";
import { lesson132 } from "./lesson-3-2.ts";
import { lesson133 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "olchem-u3",
  code: "3",
  title: "Stoichiometry",
  description:
    "The mole concept, equations, titrations, reacting masses, concentration, formulae and gas volumes — Cambridge O Level Chemistry 5070.",
  lessons: [lesson131, lesson132, lesson133],
};
