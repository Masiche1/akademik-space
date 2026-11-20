import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieALevelPhysics: Course = {
  id: "cie-a-level-physics",
  title: "Cambridge A Level Physics 9702",
  shortTitle: "A Level Physics",
  grade: "Cambridge A Level",
  framework: "Cambridge International Examinations — Physics 9702",
  description:
    "Cambridge A Level Physics 9702 covering mechanics, energy, thermal physics, waves, electricity, magnetism and nuclear physics.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: { qualification: "a-level", subject: "physics-9702" },
};
