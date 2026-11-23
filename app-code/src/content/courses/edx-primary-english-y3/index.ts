import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryEnglishY3: Course = {
  id: "edx-primary-english-y3",
  title: "Year 3 English",
  shortTitle: "Primary English Y3",
  grade: "Year 3",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Spelling: prefixes, suffixes, compound words, word families, plurals and apostrophes; comprehension: author's purpose, text types, inference, deduction and non-fiction; writing: paragraphs, planning, grammar, story structure and editing.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "primary", subject: "english-language", year: 3 },
};
