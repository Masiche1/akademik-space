import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const usScienceG3: Course = {
  id: "us-science-g3",
  title: "Grade 3 Science",
  shortTitle: "Science G3",
  grade: "Grade 3",
  framework: "NGSS K-12 Science Standards",
  description: "Explore life cycles, states of matter, forces and motion, energy, Earth's surface, weather and engineering design.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  us: { subject: "science", grade: 3 },
};
