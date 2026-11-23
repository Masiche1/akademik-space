import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryMathsY4: Course = {
  id: "edx-primary-maths-y4",
  title: "Year 4 Maths",
  shortTitle: "Primary Maths Y4",
  grade: "Year 4",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Place value to 10 000 and rounding, column addition and subtraction, factors, multiples and prime numbers, multiplication and division methods, equivalent fractions, comparing and ordering fractions, decimals and money, area and angles, the 24-hour clock, Roman numerals and statistics.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "primary", subject: "maths", year: 4 },
};
