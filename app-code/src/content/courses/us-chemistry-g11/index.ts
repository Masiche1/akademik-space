import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usChemistryG11: Course = {
  id: "us-chemistry-g11",
  title: "Grade 11 Chemistry",
  shortTitle: "Chemistry G11",
  grade: "Grade 11",
  framework: "Next Generation Science Standards (High School Physical Science)",
  description:
    "Bonding and molecular structure, reaction kinetics and chemical equilibrium, and acids, bases, buffers, titrations, solubility and electrolysis.",
  units: [unit1, unit2, unit3],
  us: { subject: "chemistry", grade: 11 },
};
