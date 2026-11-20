import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxPrimaryMathsY5: Course = {
  id: "edx-primary-maths-y5",
  title: "Year 5 Maths",
  shortTitle: "Primary Maths Y5",
  grade: "Year 5",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Place value to 1 000 000 and negative numbers, large multiplication and division, factors and prime numbers, fractions including mixed numbers and improper fractions, decimals and percentages, area and volume, angles and shape properties, time, Roman numerals and pie charts.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "primary", subject: "maths", year: 5 },
};
