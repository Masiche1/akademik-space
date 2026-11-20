import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxPrimaryEnglishY5: Course = {
  id: "edx-primary-english-y5",
  title: "Year 5 English",
  shortTitle: "Primary English Y5",
  grade: "Year 5",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Year 5 English: advanced vocabulary and word study, deep inference and author's craft, non-fiction evaluation, formal and persuasive writing, narrative skills and editing.",
  edexcel: { stage: "primary", subject: "english-language", year: 5 },
  units: [unit1, unit2, unit3],
};
