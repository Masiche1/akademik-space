import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibAaHl1: Course = {
  id: "ib-aa-hl-1",
  title: "Analysis and Approaches HL: Year 1",
  shortTitle: "AA HL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension: counting, proof by induction and contradiction, complex numbers, polynomials, further trigonometry and vectors, lines and planes.",
  units: [unit1, unit2, unit3],
  ib: { subject: "aa", level: "hl", year: 1, coreCourseIds: ["ib-aa-sl-1"] },
};
