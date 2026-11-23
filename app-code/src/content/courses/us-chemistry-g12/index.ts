import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usChemistryG12: Course = {
  id: "us-chemistry-g12",
  title: "Grade 12 Chemistry",
  shortTitle: "Chemistry G12",
  grade: "Grade 12",
  framework: "Next Generation Science Standards (NGSS)",
  description: "Explore atomic structure, chemical bonding, reactions and kinetics, and equilibrium and acids/bases.",
  units: [unit1, unit2, unit3],
  us: { subject: "chemistry", grade: 12 },
};
