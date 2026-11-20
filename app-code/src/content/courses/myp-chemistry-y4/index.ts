import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypChemistryY4: Course = {
  id: "myp-chemistry-y4",
  title: "MYP 4 Chemistry",
  shortTitle: "Chemistry MYP 4",
  grade: "MYP 4",
  framework: "IB Middle Years Programme Sciences",
  description:
    "Particle model and atomic structure, periodic trends, chemical bonding; balancing equations, reactivity, acids and bases, rates and moles; electrolysis, fuels, polymers and sustainability.",
  units: [unit1, unit2, unit3],
  myp: { subject: "chemistry", year: 4 },
};
