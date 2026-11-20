import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const cieOLEnglishLanguage: Course = {
  id: "cie-o-level-english-language",
  title: "Cambridge O Level English Language 1123",
  shortTitle: "O Level English Lang",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — English Language 1123",
  description:
    "Cambridge O Level English Language 1123 covering reading comprehension, summary writing, media and text analysis, writing skills across narrative, descriptive, argumentative and transactional forms, language analysis, grammar, exam strategies and practice.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  cie: { qualification: "o-level", subject: "english-language-1123" },
};
