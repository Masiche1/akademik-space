import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieIgcseEnglish: Course = {
  id: "cie-igcse-english",
  title: "Cambridge IGCSE First Language English 0500",
  shortTitle: "IGCSE English",
  grade: "Cambridge IGCSE",
  framework: "Cambridge International Examinations — First Language English 0500",
  description:
    "Cambridge IGCSE First Language English 0500 covering reading comprehension, writers' craft analysis, narrative and descriptive writing, argument and discursive essays, transactional and non-fiction writing, grammar and exam technique.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: { qualification: "igcse", subject: "english-first-language-0500" },
};
