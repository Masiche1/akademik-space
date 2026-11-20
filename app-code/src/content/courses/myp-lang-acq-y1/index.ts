import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangAcqY1: Course = {
  id: "myp-lang-acq-y1",
  title: "MYP 1 Language Acquisition",
  shortTitle: "Lang Acq MYP 1",
  grade: "MYP 1",
  framework: "IB Middle Years Programme — Language Acquisition",
  description:
    "Survival English for new language learners: greetings and classroom language, simple listening and reading, basic speaking and writing, core grammar and vocabulary, and first steps in intercultural awareness.",
  units: [unit1, unit2, unit3],
  myp: { subject: "language-acq", year: 1 },
};
