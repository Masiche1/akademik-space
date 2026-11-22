import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxScienceY7: Course = {
  id: "edx-science-y7",
  title: "Year 7 Science",
  shortTitle: "Science Y7",
  grade: "Year 7",
  framework: "Pearson Edexcel Lower Secondary (Key Stage 3)",
  description:
    "Bridge from primary to Key Stage 3 Science: biology of cells, organisms and ecosystems, chemistry of materials and reactions, and physics of forces, energy and waves.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "lower-secondary", subject: "science", year: 7 },
};
