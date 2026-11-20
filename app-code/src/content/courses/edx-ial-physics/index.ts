import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxIalPhysics: Course = {
  id: "edx-ial-physics",
  title: "Edexcel IAL Physics",
  shortTitle: "IAL Physics",
  grade: "International Advanced Level",
  framework: "Pearson Edexcel International Advanced Level",
  description:
    "The full Edexcel International A Level in Physics: WPH11 Mechanics and Materials, WPH12 Waves and Electricity, WPH13 Practical Skills in Physics I, WPH14 Further Mechanics, Fields and Particles, WPH15 Thermodynamics, Radiation, Oscillations and Cosmology, and WPH16 Practical Skills in Physics II.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "ial", subject: "physics", year: 2 },
};
