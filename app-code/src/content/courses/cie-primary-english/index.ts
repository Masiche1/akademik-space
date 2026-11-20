import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";

export const ciePrimaryEnglish: Course = {
  id: "cie-primary-english",
  title: "Cambridge Primary English 0058",
  shortTitle: "Primary English",
  grade: "Cambridge Primary Stages 1-6",
  framework: "Cambridge International Examinations — English 0058",
  description:
    "Cambridge Primary English 0058 covering phonics, speaking and listening, reading comprehension, narrative, persuasive and non-fiction writing across Stages 1-6.",
  units: [unit1, unit2],
  cie: { qualification: "primary", subject: "english-0058" },
};
