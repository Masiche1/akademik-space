import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibBioHl2: Course = {
  id: "ib-bio-hl-2",
  title: "Biology HL: Year 2",
  shortTitle: "Biology HL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension: advanced evolution including the Hardy-Weinberg principle and speciation, quantitative ecology covering population dynamics, communities and nutrient cycles, detailed human physiology, and the evaluation of biotechnology, conservation and sustainability strategies.",
  units: [unit4, unit5, unit6],
  ib: {
    subject: "biology",
    level: "hl",
    year: 2,
    coreCourseIds: ["ib-bio-sl-1", "ib-bio-sl-2"],
  },
};
