import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangAcqY5: Course = {
  id: "myp-lang-acq-y5",
  title: "MYP 5 Language Acquisition",
  shortTitle: "Lang Acq MYP 5",
  grade: "MYP 5",
  framework: "IB Middle Years Programme — Language Acquisition",
  description:
    "Advanced English: interpreting academic lectures, research reports and nuanced media, sustaining formal discussions and debates, writing analytical essays and proposals, using academic register and hedging, and engaging with intercultural issues through a critical and reflective lens.",
  units: [unit1, unit2, unit3],
  myp: { subject: "language-acq", year: 5 },
};
