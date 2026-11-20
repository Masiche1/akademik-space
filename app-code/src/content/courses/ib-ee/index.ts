import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibEe: Course = {
  id: "ib-ee",
  title: "Extended Essay",
  shortTitle: "Extended Essay",
  grade: "DP Core",
  framework: "IB Diploma Programme",
  description:
    "An independent research essay of up to 4000 words: choosing and framing a research question, designing research and evaluating sources, writing and citing with academic integrity, and completing the Reflection and Progress Form (RPF) that accompanies the essay for first assessment 2027.",
  units: [unit1, unit2, unit3],
  ib: { subject: "ee", level: "sl", year: 1 },
};
