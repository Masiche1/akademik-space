import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibLangASl1: Course = {
  id: "ib-lang-a-sl-1",
  title: "Language A SL: Year 1 — Reading, Writing and Analysis",
  shortTitle: "Lang A SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Foundations of IB Language A: reading and analysing prose, poetry and drama, building analytical paragraphs and essays, awareness of context and authorial purpose, and the beginnings of comparative study.",
  units: [unit1, unit2, unit3],
  ib: { subject: "language-a", level: "sl", year: 1 },
};
