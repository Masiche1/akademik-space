import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibAiHl2: Course = {
  id: "ib-ai-hl-2",
  title: "Applications and Interpretation HL: Year 2",
  shortTitle: "AI HL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension: graph theory, Poisson and Markov chains, confidence intervals and hypothesis tests, and calculus with differential equations, with Paper 3 investigations.",
  units: [unit4, unit5, unit6],
  ib: { subject: "ai", level: "hl", year: 2, coreCourseIds: ["ib-ai-sl-2"] },
};
