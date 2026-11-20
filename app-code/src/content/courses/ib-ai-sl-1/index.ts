import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibAiSl1: Course = {
  id: "ib-ai-sl-1",
  title: "Applications and Interpretation SL: Year 1",
  shortTitle: "AI SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Approximation, sequences and financial mathematics, modelling with functions, and geometry and trigonometry including Voronoi diagrams.",
  units: [unit1, unit2, unit3],
  ib: { subject: "ai", level: "sl", year: 1 },
};
