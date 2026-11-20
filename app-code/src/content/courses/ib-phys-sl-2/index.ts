import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibPhysSl2: Course = {
  id: "ib-phys-sl-2",
  title: "Physics SL: Year 2",
  shortTitle: "Physics SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Waves and their behaviour, electricity and magnetism including circuits, electromagnetic induction and transformers, and modern physics covering the photoelectric effect, nuclear decay, fission, fusion and astrophysics.",
  units: [unit4, unit5, unit6],
  ib: { subject: "physics", level: "sl", year: 2 },
};
