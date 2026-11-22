import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxPrimaryScienceY6: Course = {
  id: "edx-primary-science-y6",
  title: "Year 6 Science",
  shortTitle: "Primary Science Y6",
  grade: "Year 6",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Year 6 Science: classification and adaptation, food webs, ecosystems, human body systems, separating mixtures, forces, machines, electricity, light, sound and space.",
  edexcel: { stage: "primary", subject: "science", year: 6 },
  units: [unit1, unit2, unit3],
};
