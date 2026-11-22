import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxPrimaryScienceY3: Course = {
  id: "edx-primary-science-y3",
  title: "Year 3 Science",
  shortTitle: "Primary Science Y3",
  grade: "Year 3",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Year 3 Science: classification, life cycles, habitats and food chains, the human body and plants, materials and state changes, magnets and forces, sound, and Earth and space.",
  edexcel: { stage: "primary", subject: "science", year: 3 },
  units: [unit1, unit2, unit3],
};
