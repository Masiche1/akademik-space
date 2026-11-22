import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxPhysicsY10: Course = {
  id: "edx-physics-y10",
  title: "Year 10 Physics",
  shortTitle: "Physics Y10",
  grade: "Year 10",
  framework: "Pearson Edexcel International GCSE Physics (4PH1)",
  description:
    "International GCSE Physics, first year: motion, forces, momentum and moments; current, resistance, power and mains electricity; and wave properties, the electromagnetic spectrum, light and sound.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "igcse", subject: "physics", year: 10 },
};
