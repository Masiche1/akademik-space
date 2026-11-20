import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const usChemistryG10: Course = {
  id: "us-chemistry-g10",
  title: "Chemistry",
  shortTitle: "Chemistry",
  grade: "Grade 10",
  framework: "Next Generation Science Standards (High School Physical Science)",
  description:
    "Atomic structure, periodic trends and nuclear chemistry; bonding, intermolecular forces and gas laws; moles and stoichiometry; and solutions, energy, equilibrium and acids and bases.",
  units: [unit1, unit2, unit3, unit4],
  us: { subject: "chemistry", grade: 10 },
};
