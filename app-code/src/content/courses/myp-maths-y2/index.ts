import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypMathsY2: Course = {
  id: "myp-maths-y2",
  title: "MYP 2 Mathematics",
  shortTitle: "Maths MYP 2",
  grade: "MYP 2",
  framework: "IB Middle Years Programme Mathematics",
  description:
    "Indices, standard form, percentages, finance and proportion; expanding, factorising, equations, inequalities and linear graphs; and circles, transformations, data handling and probability.",
  units: [unit1, unit2, unit3],
  myp: { subject: "maths", year: 2 },
};
