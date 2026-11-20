import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibChemSl1: Course = {
  id: "ib-chem-sl-1",
  title: "Chemistry SL: Year 1",
  shortTitle: "Chemistry SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Stoichiometry and the mole concept, atomic structure and the periodic table, and chemical bonding with structure–property relationships, energetics, kinetics and equilibrium, with Paper 1 and Paper 2 practice throughout.",
  units: [unit1, unit2, unit3],
  ib: { subject: "chemistry", level: "sl", year: 1 },
};
