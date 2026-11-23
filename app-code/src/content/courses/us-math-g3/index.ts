import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";

export const usMathG3: Course = {
  id: "us-math-g3",
  title: "Grade 3 Math",
  shortTitle: "Math G3",
  grade: "Grade 3",
  framework: "Common Core State Standards for Mathematics",
  description: "Round and multiply/divide within 1000, work with fractions, measure time and mass, analyze data, and explore geometry.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7, unit8],
  us: { subject: "math", grade: 3 },
};
