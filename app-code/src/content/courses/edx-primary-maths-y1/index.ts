import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const edxPrimaryMathsY1: Course = {
  id: "edx-primary-maths-y1",
  title: "Year 1 Maths",
  shortTitle: "Primary Maths Y1",
  grade: "Year 1",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Counting to 100, tens and ones place value, addition and subtraction within 20, doubling, halving and number bonds; halves and quarters, 2D and 3D shapes, position and direction, length, height, time and money; multiplication and division with the 2, 5 and 10 times tables, patterns and data handling.",
  units: [unit1, unit2, unit3],
  edexcel: { stage: "primary", subject: "maths", year: 1 },
};
