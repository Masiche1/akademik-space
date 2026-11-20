import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangLitY3: Course = {
  id: "myp-lang-lit-y3",
  title: "MYP 3 Language and Literature",
  shortTitle: "Lang & Lit MYP 3",
  grade: "MYP 3",
  framework: "IB Middle Years Programme — Language and Literature",
  description:
    "Read and analyse literary and non-literary texts with deeper inference and stylistic analysis, study figurative language and text structure, and compose articles, reviews and speeches with planning and revision.",
  units: [unit1, unit2, unit3],
  myp: { subject: "language-lit", year: 3 },
};
