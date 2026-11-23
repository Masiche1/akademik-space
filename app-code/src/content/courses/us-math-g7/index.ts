import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";
import { unit8 } from "./unit-8/index.ts";
import { unit9 } from "./unit-9/index.ts";
import { unit10 } from "./unit-10/index.ts";

export const usMathG7: Course = {
  id: "us-math-g7",
  title: "Grade 7 Math",
  shortTitle: "Math G7",
  grade: "Grade 7",
  framework: "Common Core State Standards for Mathematics",
  description:
    "Proportional relationships and percents, rational number operations, expressions and two-step equations, and geometry, statistics and probability.",
  units: [
    unit1,
    unit2,
    unit3,
    unit4,
    unit5,
    unit6,
    unit7,
    unit8,
    unit9,
    unit10,
  ],
  us: { subject: "math", grade: 7 },
};
