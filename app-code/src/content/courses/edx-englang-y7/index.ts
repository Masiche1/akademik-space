import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEngLangY7: Course = {
  id: "edx-englang-y7",
  title: "Year 7 English Language",
  shortTitle: "English Y7",
  grade: "Year 7",
  framework: "Pearson Edexcel Lower Secondary (Key Stage 3)",
  description:
    "Bridge from primary to Key Stage 3 English: reading comprehension and analysis of fiction and non-fiction, analytical and creative writing, and spoken language and media literacy.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "lower-secondary", subject: "english-language", year: 7 },
};
