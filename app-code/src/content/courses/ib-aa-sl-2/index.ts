import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibAaSl2: Course = {
  id: "ib-aa-sl-2",
  title: "Analysis and Approaches SL: Year 2",
  shortTitle: "AA SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Statistics and probability distributions, then differential and integral calculus through optimization, kinematics and area.",
  units: [unit4, unit5, unit6],
  ib: { subject: "aa", level: "sl", year: 2 },
};
