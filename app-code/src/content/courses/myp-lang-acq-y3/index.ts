import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangAcqY3: Course = {
  id: "myp-lang-acq-y3",
  title: "MYP 3 Language Acquisition",
  shortTitle: "Lang Acq MYP 3",
  grade: "MYP 3",
  framework: "IB Middle Years Programme — Language Acquisition",
  description:
    "Expanding English: understanding interviews and articles, discussing opinions and experiences, writing recounts and instructions, using present perfect and modals, and developing intercultural competence on global topics.",
  units: [unit1, unit2, unit3],
  myp: { subject: "language-acq", year: 3 },
};
