import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypMathsY3: Course = {
  id: "myp-maths-y3",
  title: "MYP 3 Mathematics",
  shortTitle: "Maths MYP 3",
  grade: "MYP 3",
  framework: "IB Middle Years Programme Mathematics",
  description:
    "Number systems, indices, standard form, percentages and proportion; expanding, factorising, equations, inequalities and sequences; and Pythagoras, trigonometry, measurement, statistics and probability.",
  units: [unit1, unit2, unit3],
  myp: { subject: "maths", year: 3 },
};
