import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";
import { unit10 } from "./unit-10/index.ts";

export const usChemistryG10: Course = {
  id: "us-chemistry-g10",
  title: "Chemistry",
  shortTitle: "Chemistry",
  grade: "Grade 10",
  framework: "Next Generation Science Standards (High School Physical Science)",
  description:
    "Atomic structure, periodic trends and nuclear chemistry; bonding, intermolecular forces and gas laws; moles and stoichiometry; and solutions, energy, equilibrium and acids and bases.",
  units: [
    unit1,
    unit2,
    unit3,
    unit4,
    unit5,
    unit6,
    unit7,
    unit8,
    unit9,
    unit10,
  ],
  us: { subject: "chemistry", grade: 10 },
};
