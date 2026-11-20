import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibChemSl2: Course = {
  id: "ib-chem-sl-2",
  title: "Chemistry SL: Year 2",
  shortTitle: "Chemistry SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Year 2 develops quantitative stoichiometry through limiting reagent, titration, gas volume and solution calculations, then applies this to energetics (enthalpy, Hess cycles, calorimetry), kinetics, equilibrium, electrochemistry and an introduction to organic chemistry and chemical analysis.",
  units: [unit4, unit5, unit6],
  ib: { subject: "chemistry", level: "sl", year: 2 },
};
