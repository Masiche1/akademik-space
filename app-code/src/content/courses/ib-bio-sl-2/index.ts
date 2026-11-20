import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibBioSl2: Course = {
  id: "ib-bio-sl-2",
  title: "Biology SL: Year 2",
  shortTitle: "Biology SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Evolution and ecology, human and plant physiology, and the practical applications of genetics — pedigrees, biotechnology, and conservation of biodiversity.",
  units: [unit4, unit5, unit6],
  ib: { subject: "biology", level: "sl", year: 2 },
};
