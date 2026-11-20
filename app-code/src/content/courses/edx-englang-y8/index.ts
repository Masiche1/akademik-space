import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEngLangY8: Course = {
  id: "edx-englang-y8",
  title: "Year 8 English Language",
  shortTitle: "Lang Y8",
  grade: "Year 8",
  framework: "Pearson Edexcel Lower Secondary English (Key Stage 3)",
  description:
    "Reading fiction and non-fiction for meaning and effect, comparing texts, and descriptive and transactional writing with accurate punctuation.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "lower-secondary", subject: "english-language", year: 8 },
};
