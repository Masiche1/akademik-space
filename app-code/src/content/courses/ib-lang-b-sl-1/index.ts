import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibLangBSl1: Course = {
  id: "ib-lang-b-sl-1",
  title: "Language B SL: Year 1 — Core Language Skills",
  shortTitle: "Lang B SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Build the transferable skills of second language acquisition: reading strategies for gist and detail, productive writing from paragraphs to simple essays, register and audience awareness, listening and note-taking, conversation skills and the foundations of intercultural understanding.",
  units: [unit1, unit2, unit3],
  ib: { subject: "language-b", level: "sl", year: 1 },
};
