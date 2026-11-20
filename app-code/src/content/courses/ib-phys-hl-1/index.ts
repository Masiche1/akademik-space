import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibPhysHl1: Course = {
  id: "ib-phys-hl-1",
  title: "Physics HL: Year 1",
  shortTitle: "Physics HL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Higher level extension only: additional higher level content covering Galilean and special relativity, rigid body mechanics, the first law of thermodynamics, entropy and heat engines, standing waves, diffraction and interference, the Doppler effect and wave energy — with Paper 1, Paper 2 and Paper 3 practice throughout.",
  units: [unit1, unit2, unit3],
  ib: {
    subject: "physics",
    level: "hl",
    year: 1,
    coreCourseIds: ["ib-phys-sl-1", "ib-phys-sl-2"],
  },
};
