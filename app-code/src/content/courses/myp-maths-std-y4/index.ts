import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypMathsStdY4: Course = {
  id: "myp-maths-std-y4",
  title: "MYP 4 Standard Mathematics",
  shortTitle: "Std Maths MYP 4",
  grade: "MYP 4",
  framework: "IB Middle Years Programme Mathematics",
  description:
    "Surds, indices and inequalities; functions, linear equations, simultaneous equations, quadratics and sequences; and circle theorems, coordinate geometry, trigonometry, statistics and probability.",
  units: [unit1, unit2, unit3],
  myp: { subject: "maths-standard", year: 4 },
};
