import type { Course } from "../../types.ts";
import { unit10 } from "./unit-10/index.ts";
import { unit11 } from "./unit-11/index.ts";
import { unit12 } from "./unit-12/index.ts";
import { unit13 } from "./unit-13/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";

export const edxBusinessY11: Course = {
  id: "edx-business-y11",
  title: "Year 11 Business",
  shortTitle: "Business Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE Business (4BS0)",
  description:
    "International GCSE Business, second year: finance, financial statements and ratios; human resources, motivation and employment law; and external influences, market structures, ethics and sustainability.",
  units: [ unit10, unit11, unit12, unit13, unit4, unit5, unit6, unit7, unit8, unit9,],
  edexcel: { stage: "igcse", subject: "business", year: 11 },
};
