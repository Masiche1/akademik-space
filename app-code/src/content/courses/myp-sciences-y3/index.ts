import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypSciencesY3: Course = {
  id: "myp-sciences-y3",
  title: "MYP 3 Sciences",
  shortTitle: "Sciences MYP 3",
  grade: "MYP 3",
  framework: "IB Middle Years Programme Sciences",
  description:
    "Atomic structure and reactions, acids and neutralisation; classification, variation and selection, photosynthesis, respiration and organ systems; and motion, energy and waves, Earth's structure and climate.",
  units: [unit1, unit2, unit3],
  myp: { subject: "sciences", year: 3 },
};
