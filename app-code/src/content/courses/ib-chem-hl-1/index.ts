import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibChemHl1: Course = {
  id: "ib-chem-hl-1",
  title: "Chemistry HL: Year 1",
  shortTitle: "Chemistry HL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension only: additional higher level content covering electrons in atoms and photoelectron spectroscopy, ionization energy and electron affinity trends, d-block elements and coloured complexes, VSEPR and hybridization, the bonding continuum and polymers, Born-Haber energy cycles, entropy and spontaneity, and rate laws with reaction mechanisms — with Paper 1, Paper 2 and Paper 3 practice throughout.",
  units: [unit1, unit2, unit3],
  ib: {
    subject: "chemistry",
    level: "hl",
    year: 1,
    coreCourseIds: ["ib-chem-sl-1", "ib-chem-sl-2"],
  },
};
