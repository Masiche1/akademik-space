import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const usPhysicsG10: Course = {
  id: "us-physics-g10",
  title: "Grade 10 Physics",
  shortTitle: "Physics G10",
  grade: "Grade 10",
  framework: "Next Generation Science Standards (NGSS)",
  description: "Explore forces and motion, energy transfer and conservation, and waves including the electromagnetic spectrum.",
  units: [unit1, unit2, unit3],
  us: { subject: "physics", grade: 10 },
};
