import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const usPhysicsG11: Course = {
  id: "us-physics-g11",
  title: "Physics",
  shortTitle: "Physics",
  grade: "Grade 11",
  framework: "Next Generation Science Standards (High School Physical Science)",
  description:
    "Kinematics, Newton's laws and momentum; work, energy, gravitation and fields; circuits and electrical power; and waves, electromagnetic radiation and information technology.",
  units: [unit1, unit2, unit3, unit4],
  us: { subject: "physics", grade: 11 },
};
