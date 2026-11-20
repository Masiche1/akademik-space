import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibLangAbSl1: Course = {
  id: "ib-lang-ab-sl-1",
  title: "Language ab initio SL: Year 1 — Basic Communication",
  shortTitle: "Lang ab initio SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Foundational communication skills for beginners: greetings and introductions, numbers and time, asking simple questions, understanding signs and everyday texts, listening for key information and basic intercultural awareness.",
  units: [unit1, unit2, unit3],
  ib: { subject: "language-ab-initio", level: "sl", year: 1 },
};
