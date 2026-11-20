import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangAcqY4: Course = {
  id: "myp-lang-acq-y4",
  title: "MYP 4 Language Acquisition",
  shortTitle: "Lang Acq MYP 4",
  grade: "MYP 4",
  framework: "IB Middle Years Programme — Language Acquisition",
  description:
    "Academic English: understanding media and opinion texts, discussing global issues, writing structured essays and reports, using the passive voice and conditionals, and engaging in intercultural and media literacy discussions.",
  units: [unit1, unit2, unit3],
  myp: { subject: "language-acq", year: 4 },
};
