import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxScienceY8: Course = {
  id: "edx-science-y8",
  title: "Year 8 Science",
  shortTitle: "Science Y8",
  grade: "Year 8",
  framework: "Pearson Edexcel Lower Secondary Science (Key Stage 3)",
  description:
    "Cells, organisation and ecosystems; the particle model, mixtures and chemical reactions; and forces, energy and electric circuits.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "lower-secondary", subject: "science", year: 8 },
};
