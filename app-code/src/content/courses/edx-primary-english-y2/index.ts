import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryEnglishY2: Course = {
  id: "edx-primary-english-y2",
  title: "Year 2 English",
  shortTitle: "Primary English Y2",
  grade: "Year 2",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Phonics and word reading: alternative spellings, suffixes, homophones, exception words, syllables and expression; reading comprehension: inference, evidence, non-fiction features, comparing texts, summarising; writing: sentence types, conjunctions, noun phrases, punctuation, story planning and editing.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "primary", subject: "english-language", year: 2 },
};
