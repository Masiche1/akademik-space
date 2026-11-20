import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const cieIgcseBusinessStudies: Course = {
  id: "cie-igcse-business-studies",
  title: "Cambridge IGCSE Business Studies 0450",
  shortTitle: "IGCSE Business Studies",
  grade: "IGCSE",
  framework: "Cambridge International",
  description:
    "Comprehensive coverage of Cambridge IGCSE Business Studies 0450: understanding business activity, external influences, and case study analysis.",
  units: [unit1, unit2, unit3],
  cie: {
    qualification: "igcse",
    subject: "business-studies-0450",
  },
};
