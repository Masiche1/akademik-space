import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypSciencesY2: Course = {
  id: "myp-sciences-y2",
  title: "MYP 2 Sciences",
  shortTitle: "Sciences MYP 2",
  grade: "MYP 2",
  framework: "IB Middle Years Programme Sciences",
  description:
    "Atoms, the periodic table, chemical reactions, acids and alkalis; nutrition, digestion, breathing, circulation and health; and sound, light, electricity, magnetism and motion.",
  units: [unit1, unit2, unit3],
  myp: { subject: "sciences", year: 2 },
};
