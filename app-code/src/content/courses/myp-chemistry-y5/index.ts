import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypChemistryY5: Course = {
  id: "myp-chemistry-y5",
  title: "MYP 5 Chemistry",
  shortTitle: "Chemistry MYP 5",
  grade: "MYP 5",
  framework: "IB Middle Years Programme Sciences",
  description:
    "Electron configuration and detailed periodic trends, ionic/covalent/metallic bonding and intermolecular forces; reaction rates, reversible reactions and equilibrium, energetics and electrochemistry; polymers, fuels, atmospheric chemistry, chemical analysis and green chemistry.",
  units: [unit1, unit2, unit3],
  myp: { subject: "chemistry", year: 5 },
};
