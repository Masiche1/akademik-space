import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibAiHl1: Course = {
  id: "ib-ai-hl-1",
  title: "Applications and Interpretation HL: Year 1",
  shortTitle: "AI HL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension: complex numbers, matrices and eigenvalues, advanced modelling and linearization, vectors and matrix transformations.",
  units: [unit1, unit2, unit3],
  ib: { subject: "ai", level: "hl", year: 1, coreCourseIds: ["ib-ai-sl-1"] },
};
