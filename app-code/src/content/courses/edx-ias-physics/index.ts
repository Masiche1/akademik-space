import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxIasPhysics: Course = {
  id: "edx-ias-physics",
  title: "Edexcel IAS Physics",
  shortTitle: "IAS Physics",
  grade: "International Advanced Subsidiary",
  framework: "Pearson Edexcel International Advanced Subsidiary",
  description:
    "The full Edexcel International AS in Physics: WPH11 Mechanics and Materials; WPH12 Waves and Electricity; and WPH13 Practical Skills in Physics I.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "ias", subject: "physics", year: 1 },
};
