import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibPhysSl1: Course = {
  id: "ib-phys-sl-1",
  title: "Physics SL: Year 1",
  shortTitle: "Physics SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Year 1 IB Physics SL covering kinematics, forces, friction, momentum, work, energy, power, circular motion, thermal physics and the gas laws, with Paper 1 and Paper 2 style practice throughout.",
  units: [unit1, unit2, unit3],
  ib: { subject: "physics", level: "sl", year: 1 },
};
