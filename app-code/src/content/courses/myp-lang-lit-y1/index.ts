import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypLangLitY1: Course = {
  id: "myp-lang-lit-y1",
  title: "MYP 1 Language and Literature",
  shortTitle: "Lang & Lit MYP 1",
  grade: "MYP 1",
  framework: "IB Middle Years Programme — Language and Literature",
  description:
    "Reading stories and poems with literal comprehension, learning basic language conventions such as sentences, punctuation and word meanings, and creating short stories, poems and messages.",
  units: [unit1, unit2, unit3],
  myp: { subject: "language-lit", year: 1 },
};
