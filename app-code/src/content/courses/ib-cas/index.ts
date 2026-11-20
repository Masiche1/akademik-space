import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibCas: Course = {
  id: "ib-cas",
  title: "Creativity, Activity, Service",
  shortTitle: "CAS",
  grade: "DP Core",
  framework: "IB Diploma Programme",
  description:
    "The CAS programme develops students through creativity, activity and service: setting personal goals, planning and documenting experiences, collaborating with others, reflecting on learning, and building a portfolio that demonstrates balanced engagement across all three strands.",
  units: [unit1, unit2, unit3],
  ib: { subject: "cas", level: "sl", year: 1 },
};
