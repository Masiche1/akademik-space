import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryEnglishY4: Course = {
  id: "edx-primary-english-y4",
  title: "Year 4 English",
  shortTitle: "Primary English Y4",
  grade: "Year 4",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Year 4 English: spelling patterns and word origins, retrieval and inference, text structure, formal and persuasive writing, sentence variety and paragraphing, and story writing and editing.",
  edexcel: { stage: "primary", subject: "english-language", year: 4 },
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
};
