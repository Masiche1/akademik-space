import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangAcqY2: Course = {
  id: "myp-lang-acq-y2",
  title: "MYP 2 Language Acquisition",
  shortTitle: "Lang Acq MYP 2",
  grade: "MYP 2",
  framework: "IB Middle Years Programme — Language Acquisition",
  description:
    "Everyday English: listening and reading about familiar topics, speaking and writing about hobbies, school and weather, past and future forms, comparatives, short emails, and deeper intercultural awareness.",
  units: [unit1, unit2, unit3],
  myp: { subject: "language-acq", year: 2 },
};
