import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryEnglishY1: Course = {
  id: "edx-primary-english-y1",
  title: "Year 1 English",
  shortTitle: "Primary English Y1",
  grade: "Year 1",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Phonics and early reading: letter sounds, blending, digraphs, tricky words, CVC words, rhyming; reading comprehension: characters, settings, sequencing, prediction, non-fiction and poems; writing: sentences, capitals, full stops, spelling, handwriting and composition.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "primary", subject: "english-language", year: 1 },
};
