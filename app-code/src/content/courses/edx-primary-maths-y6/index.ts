import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryMathsY6: Course = {
  id: "edx-primary-maths-y6",
  title: "Year 6 Maths",
  shortTitle: "Primary Maths Y6",
  grade: "Year 6",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Place value to 10 million, order of operations, formal written methods, factors and multiples, fractions including mixed numbers, decimals and percentages, ratio and proportion, introductory algebra, area of triangles and parallelograms, angles in shapes, mean/median/mode/range, and speed and money problem solving.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "primary", subject: "maths", year: 6 },
};
