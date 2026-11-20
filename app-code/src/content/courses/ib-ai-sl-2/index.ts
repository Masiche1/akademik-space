import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibAiSl2: Course = {
  id: "ib-ai-sl-2",
  title: "Applications and Interpretation SL: Year 2",
  shortTitle: "AI SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Statistics and hypothesis testing, probability and the normal distribution, and introductory calculus with optimization and the trapezoidal rule.",
  units: [unit4, unit5, unit6],
  ib: { subject: "ai", level: "sl", year: 2 },
};
