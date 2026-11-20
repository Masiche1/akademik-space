import type { Course } from "../../types.ts";
import { unit4 } from "./unit-1/index.ts";
import { unit5 } from "./unit-2/index.ts";
import { unit6 } from "./unit-3/index.ts";

export const ibLangBSl2: Course = {
  id: "ib-lang-b-sl-2",
  title: "Language B SL: Year 2 — Advanced Skills and Interculturality",
  shortTitle: "Lang B SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Extend comprehension to longer texts and argument analysis, develop extended and argumentative writing under time pressure, and deepen intercultural understanding alongside independent learning strategies for the IB Language B SL course.",
  units: [unit4, unit5, unit6],
  ib: { subject: "language-b", level: "sl", year: 2 },
};
