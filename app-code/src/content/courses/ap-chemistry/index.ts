import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apChemistry: Course = {
  id: "ap-chemistry",
  title: "AP Chemistry",
  shortTitle: "AP Chem",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Atomic structure and periodicity, chemical reactions with kinetics and equilibrium, and thermodynamics with electrochemistry — the AP Chemistry curriculum.",
  units: [unit1, unit2, unit3],
  ap: { exam: "chemistry" },
};
