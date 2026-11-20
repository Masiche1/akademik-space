import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";

export const cieOLEnglishESL: Course = {
  id: "cie-o-level-english-as-a-second-language",
  title: "Cambridge O Level English as a Second Language 1120",
  shortTitle: "O Level ESL",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — English as a Second Language 1120",
  description:
    "Cambridge O Level English as a Second Language 1120 covering reading comprehension, summary writing, directed and transactional writing, composition, grammar and vocabulary, listening and speaking skills, and exam preparation.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7],
  cie: { qualification: "o-level", subject: "english-as-a-second-language-1120" },
};
