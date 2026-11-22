import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxEconomicsY11: Course = {
  id: "edx-economics-y11",
  title: "Year 11 Economics",
  shortTitle: "Economics Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE Economics (4EC1)",
  description:
    "International GCSE Economics, second year: macroeconomics, aggregate demand and supply, exchange rates, international trade, development and globalisation.",
  units: [unit4, unit5, unit6],
  edexcel: { stage: "igcse", subject: "economics", year: 11 },
};
