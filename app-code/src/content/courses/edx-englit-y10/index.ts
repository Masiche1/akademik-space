import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEngLitY10: Course = {
  id: "edx-englit-y10",
  title: "Year 10 English Literature",
  shortTitle: "Lit Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE English Literature (4ET1)",
  description:
    "Unseen poetry and poetry comparison, An Inspector Calls, and Macbeth.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "english-literature", year: 10 },
};
