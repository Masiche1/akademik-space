import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypMathsStdY5: Course = {
  id: "myp-maths-std-y5",
  title: "MYP 5 Standard Mathematics",
  shortTitle: "Std Maths MYP 5",
  grade: "MYP 5",
  framework: "IB Middle Years Programme Mathematics",
  description:
    "Advanced surds and indices, compound and absolute value inequalities, standard form and number sets; functions, linear equations, simultaneous equations, quadratics, sequences, transformations and exponentials; and circle theorems, coordinate geometry, trigonometry, mensuration, statistics and probability.",
  units: [unit1, unit2, unit3],
  myp: { subject: "maths-standard", year: 5 },
};
