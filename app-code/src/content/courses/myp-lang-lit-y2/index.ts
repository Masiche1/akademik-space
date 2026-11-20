import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangLitY2: Course = {
  id: "myp-lang-lit-y2",
  title: "MYP 2 Language and Literature",
  shortTitle: "Lang & Lit MYP 2",
  grade: "MYP 2",
  framework: "IB Middle Years Programme — Language and Literature",
  description:
    "Reading stories with deeper analysis of character, perspective and theme, learning grammar and language features such as clauses, tenses and speech, and writing with a clear audience and purpose.",
  units: [unit1, unit2, unit3],
  myp: { subject: "language-lit", year: 2 },
};
