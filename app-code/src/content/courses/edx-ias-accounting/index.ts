import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxIasAccounting: Course = {
  id: "edx-ias-accounting",
  title: "Edexcel IAS Accounting",
  shortTitle: "IAS Accounting",
  grade: "International Advanced Subsidiary",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Accounting: accounting principles, recording, sole traders, partnerships, companies, and interpretation.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "ias", subject: "accounting", year: 1 },
};
