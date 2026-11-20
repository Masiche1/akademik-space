import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEngLangY10: Course = {
  id: "edx-englang-y10",
  title: "Year 10 English Language",
  shortTitle: "Lang Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE English Language A (4EA1)",
  description:
    "Paper 1 non-fiction reading and transactional writing, and Paper 2 poetry and prose analysis with imaginative writing.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "english-language", year: 10 },
};
