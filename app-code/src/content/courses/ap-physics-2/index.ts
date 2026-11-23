import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apPhysics2: Course = {
  id: "ap-physics-2",
  title: "AP Physics 2",
  shortTitle: "AP Phys 2",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Fluids and thermodynamics, electricity and magnetism, optics, and quantum and nuclear physics — the algebra-based AP Physics 2 curriculum.",
  units: [unit1, unit2, unit3],
  ap: { exam: "physics-2" },
};
