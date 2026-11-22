import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxPrimaryScienceY4: Course = {
  id: "edx-primary-science-y4",
  title: "Year 4 Science",
  shortTitle: "Primary Science Y4",
  grade: "Year 4",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Year 4 Science: diet classification, food webs, seasonal adaptations, digestion and circulation, plant reproduction, materials and rusting, electricity, light and space.",
  edexcel: { stage: "primary", subject: "science", year: 4 },
  units: [unit1, unit2, unit3],
};
