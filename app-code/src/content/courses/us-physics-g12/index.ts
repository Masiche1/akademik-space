import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const usPhysicsG12: Course = {
  id: "us-physics-g12",
  title: "Grade 12 Physics",
  shortTitle: "Physics G12",
  grade: "Grade 12",
  us: { subject: "physics", grade: 12 },
  units: [unit1, unit2, unit3, unit4],
};
