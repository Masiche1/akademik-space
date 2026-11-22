import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxPrimaryScienceY5: Course = {
  id: "edx-primary-science-y5",
  title: "Year 5 Science",
  shortTitle: "Primary Science Y5",
  grade: "Year 5",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Year 5 Science: food chains, ecosystems, life cycles, classification and evolution, nutrition, body systems, separating mixtures, forces, light, sound and space.",
  edexcel: { stage: "primary", subject: "science", year: 5 },
  units: [unit1, unit2, unit3],
};
