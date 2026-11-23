import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit10 } from "./unit-10/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";

export const edxBusinessY10: Course = {
  id: "edx-business-y10",
  title: "Year 10 Business",
  shortTitle: "Business Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE Business (4BS0)",
  description:
    "International GCSE Business, first year: enterprise, objectives, stakeholders and CSR; marketing, market research, the marketing mix and promotion; and operations management, quality, inventory and technology.",
  units: [ unit1, unit10, unit2, unit3, unit4, unit5, unit6, unit7, unit8, unit9,],
  edexcel: { stage: "igcse", subject: "business", year: 10 },
};
