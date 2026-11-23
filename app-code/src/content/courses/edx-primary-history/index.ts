import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryHistory: Course = {
  id: "edx-primary-history",
  title: "Edexcel Primary History",
  shortTitle: "Primary History",
  grade: "Years 1-6",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Chronology, ancient and British history, and historical enquiry for Years 1-6: timelines, early humans and civilisations, Romans, Vikings, Tudors and the industrial revolution, and how historians use sources.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "primary", subject: "history", year: 1 },
};
