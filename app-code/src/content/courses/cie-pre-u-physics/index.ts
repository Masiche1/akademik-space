import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ciePreUPhysics: Course = {
  id: "cie-pre-u-physics",
  title: "Cambridge Pre-U Physics 9792",
  shortTitle: "Pre-U Physics",
  grade: "Cambridge Pre-U",
  framework: "Cambridge International Examinations — Pre-U Physics 9792",
  description:
    "Cambridge Pre-U Physics 9792 covering mechanics, waves, electromagnetism, thermodynamics, quantum physics, relativity and astrophysics.",
  units: [unit1, unit2, unit3],
  cie: { qualification: "pre-u", subject: "physics-9792" },
};
