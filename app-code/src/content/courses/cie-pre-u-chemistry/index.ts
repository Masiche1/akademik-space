import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ciePreUChemistry: Course = {
  id: "cie-pre-u-chemistry",
  title: "Cambridge Pre-U Chemistry 9791",
  shortTitle: "Pre-U Chemistry",
  grade: "Cambridge Pre-U",
  framework: "Cambridge International Examinations — Pre-U Chemistry 9791",
  description:
    "Cambridge Pre-U Chemistry 9791 covering atomic structure, bonding, stoichiometry, energetics, kinetics, equilibria, organic chemistry, polymers, transition metals and environmental chemistry.",
  units: [unit1, unit2, unit3],
  cie: { qualification: "pre-u", subject: "chemistry-9791" },
};
