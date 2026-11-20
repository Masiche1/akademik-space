import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxPrimaryMathsY3: Course = {
  id: "edx-primary-maths-y3",
  title: "Year 3 Maths",
  shortTitle: "Primary Maths Y3",
  grade: "Year 3",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Place value to 1000, addition and subtraction across 1000, all times tables to 12 × 12, unit and non-unit fractions of amounts, 2D and 3D shapes with angles and symmetry, measuring length, mass and capacity, perimeter, time to the minute, money and interpreting charts.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "primary", subject: "maths", year: 3 },
};
