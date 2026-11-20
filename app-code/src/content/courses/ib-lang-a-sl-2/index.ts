import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibLangASl2: Course = {
  id: "ib-lang-a-sl-2",
  title: "Language A SL: Year 2 — Comparative Study and Advanced Analysis",
  shortTitle: "Lang A SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Advanced literary analysis through critical theory, context and intertextuality, stylistic close reading, sustained comparative essay writing, and oral and reflective practice for the IB Language A assessment.",
  units: [unit4, unit5, unit6],
  ib: { subject: "language-a", level: "sl", year: 2 },
};
