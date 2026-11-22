import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxBusinessY11: Course = {
  id: "edx-business-y11",
  title: "Year 11 Business",
  shortTitle: "Business Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE Business (4BS0)",
  description:
    "International GCSE Business, second year: finance, financial statements and ratios; human resources, motivation and employment law; and external influences, market structures, ethics and sustainability.",
  units: [unit4, unit5, unit6],
  edexcel: { stage: "igcse", subject: "business", year: 11 },
};
