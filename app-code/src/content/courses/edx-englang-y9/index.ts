import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEngLangY9: Course = {
  id: "edx-englang-y9",
  title: "Year 9 English Language",
  shortTitle: "Lang Y9",
  grade: "Year 9",
  framework: "Pearson Edexcel Lower Secondary English (Key Stage 3)",
  description:
    "19th-century fiction, travel writing and journalism, comparing perspectives, and writing to narrate and argue.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "lower-secondary", subject: "english-language", year: 9 },
};
