import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibAaSl1: Course = {
  id: "ib-aa-sl-1",
  title: "Analysis and Approaches SL: Year 1",
  shortTitle: "AA SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Sequences, logarithms and the binomial theorem, functions and transformations, and trigonometry, with Paper 1 non-calculator and Paper 2 calculator practice.",
  units: [unit1, unit2, unit3],
  ib: { subject: "aa", level: "sl", year: 1 },
};
