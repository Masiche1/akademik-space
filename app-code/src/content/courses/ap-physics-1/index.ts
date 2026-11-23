import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const apPhysics1: Course = {
  id: "ap-physics-1",
  title: "AP Physics 1",
  shortTitle: "AP Phys 1",
  grade: "AP",
  framework: "College Board Advanced Placement",
  description: "Kinematics and dynamics, energy and momentum, rotational motion, and waves and electricity — the algebra-based AP Physics 1 curriculum.",
  units: [unit1, unit2, unit3],
  ap: { exam: "physics-1" },
};
