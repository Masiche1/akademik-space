import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibLangAbSl2: Course = {
  id: "ib-lang-ab-sl-2",
  title: "Language ab initio SL: Year 2 — Building Foundations",
  shortTitle: "Lang ab initio SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Expanding vocabulary and simple sentence structures, describing people, places and things, practical writing tasks such as messages, forms and short paragraphs, and intercultural basics with review and planning for continued language learning.",
  units: [unit4, unit5, unit6],
  ib: { subject: "language-ab-initio", level: "sl", year: 2 },
};
