import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEngLitY11: Course = {
  id: "edx-englit-y11",
  title: "Year 11 English Literature",
  shortTitle: "Lit Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE English Literature (4ET1)",
  description:
    "Of Mice and Men, Pride and Prejudice, and timed exam mastery for every 4ET1 section.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "english-literature", year: 11 },
};
