import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";

export const edxPhysicsY11: Course = {
  id: "edx-physics-y11",
  title: "Year 11 Physics",
  shortTitle: "Physics Y11",
  grade: "Year 11",
  framework: "Pearson Edexcel International GCSE Physics (4PH1)",
  description:
    "International GCSE Physics, second year: energy, thermal physics, density, pressure and gases; magnetism, induction, transformers and energy resources; and radioactivity, nuclear energy and astrophysics.",
  units: [unit1, unit2, unit3, unit4],
  edexcel: { stage: "igcse", subject: "physics", year: 11 },
};
