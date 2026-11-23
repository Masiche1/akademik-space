import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const edxPrimaryMathsY2: Course = {
  id: "edx-primary-maths-y2",
  title: "Year 2 Maths",
  shortTitle: "Primary Maths Y2",
  grade: "Year 2",
  framework: "Pearson Edexcel International Primary Curriculum",
  description:
    "Counting in steps to 100, place value, addition and subtraction within 100, multiplication and division facts for 2, 5 and 10, fractions of shapes and amounts, 2D and 3D shapes, time to quarter hours, money, measuring length and handling data.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  edexcel: { stage: "primary", subject: "maths", year: 2 },
};
