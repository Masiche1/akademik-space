import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibAaHl2: Course = {
  id: "ib-aa-hl-2",
  title: "Analysis and Approaches HL: Year 2",
  shortTitle: "AA HL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension: Bayes' theorem and continuous random variables, further differentiation, integration techniques, differential equations and Maclaurin series, with Paper 3 investigations.",
  units: [unit4, unit5, unit6],
  ib: { subject: "aa", level: "hl", year: 2, coreCourseIds: ["ib-aa-sl-2"] },
};
