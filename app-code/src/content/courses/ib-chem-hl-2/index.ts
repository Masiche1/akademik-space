import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibChemHl2: Course = {
  id: "ib-chem-hl-2",
  title: "Chemistry HL: Year 2",
  shortTitle: "Chemistry HL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension only: additional higher level content covering the equilibrium law with Kc and Kp, pH curves and weak acid–base calculations, Lewis acids and bases, standard electrode potentials and cell EMF calculations, electrolysis and Faraday's laws, electrochemical applications, and organic reaction types, synthetic routes, stereoisomerism and spectroscopic identification — with Paper 1, Paper 2 and Paper 3 practice throughout.",
  units: [unit4, unit5, unit6],
  ib: {
    subject: "chemistry",
    level: "hl",
    year: 2,
    coreCourseIds: ["ib-chem-sl-1", "ib-chem-sl-2"],
  },
};
