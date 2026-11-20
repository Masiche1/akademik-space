import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEngLangY11: Course = {
  id: "edx-englang-y11",
  title: "Year 11 English Language",
  shortTitle: "Lang Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE English Language A (4EA1)",
  description:
    "Top-band reading analysis, rhetoric, transactional writing mastery, and full exam-style Paper 1 and Paper 2 practice.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "english-language", year: 11 },
};
