import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxPrimaryEnglishY6: Course = {
  id: "edx-primary-english-y6",
  title: "Year 6 English",
  shortTitle: "Primary English Y6",
  grade: "Year 6",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Year 6 English: advanced vocabulary and figurative language, evaluative and comparative reading, formal and persuasive writing, narrative and descriptive craft, and advanced editing.",
  edexcel: { stage: "primary", subject: "english-language", year: 6 },
  units: [unit1, unit2, unit3],
};
