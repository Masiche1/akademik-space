import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypMathsY1: Course = {
  id: "myp-maths-y1",
  title: "MYP 1 Mathematics",
  shortTitle: "Maths MYP 1",
  grade: "MYP 1",
  framework: "IB Middle Years Programme Mathematics",
  description:
    "Integers, factors and primes, fractions, decimals and percentages; expressions, equations, sequences and ratio; and angles, measurement, statistics and probability.",
  units: [unit1, unit2, unit3],
  myp: { subject: "maths", year: 1 },
};
