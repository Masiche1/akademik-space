import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxBusinessY10: Course = {
  id: "edx-business-y10",
  title: "Year 10 Business",
  shortTitle: "Business Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE Business (4BS0)",
  description:
    "International GCSE Business, first year: enterprise, objectives, stakeholders and CSR; marketing, market research, the marketing mix and promotion; and operations management, quality, inventory and technology.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "business", year: 10 },
};
