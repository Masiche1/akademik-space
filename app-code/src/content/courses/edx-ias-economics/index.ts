import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxIasEconomics: Course = {
  id: "edx-ias-economics",
  title: "Edexcel IAS Economics",
  shortTitle: "IAS Economics",
  grade: "International Advanced Subsidiary",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Economics: microeconomics (markets, market failure, business economics), macroeconomics (objectives, policy) and the international economy.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "ias", subject: "economics", year: 1 },
};
