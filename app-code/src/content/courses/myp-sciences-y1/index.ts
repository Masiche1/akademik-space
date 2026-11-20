import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypSciencesY1: Course = {
  id: "myp-sciences-y1",
  title: "MYP 1 Sciences",
  shortTitle: "Sciences MYP 1",
  grade: "MYP 1",
  framework: "IB Middle Years Programme Sciences",
  description:
    "Scientific inquiry, states of matter and separating mixtures; cells, classification and ecosystems; and forces, energy resources and Earth in space.",
  units: [unit1, unit2, unit3],
  myp: { subject: "sciences", year: 1 },
};
