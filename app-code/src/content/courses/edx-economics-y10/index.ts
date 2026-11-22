import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxEconomicsY10: Course = {
  id: "edx-economics-y10",
  title: "Year 10 Economics",
  shortTitle: "Economics Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE Economics (4EC1)",
  description:
    "International GCSE Economics, first year: the market system, scarcity and opportunity cost; demand, supply, equilibrium and market failure; and government policy, unemployment, inflation and international trade.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "igcse", subject: "economics", year: 10 },
};
