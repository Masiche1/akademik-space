import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypMathsExtY4: Course = {
  id: "myp-maths-ext-y4",
  title: "MYP 4 Extended Mathematics",
  shortTitle: "Ext Maths MYP 4",
  grade: "MYP 4",
  framework: "IB Middle Years Programme Mathematics",
  description:
    "Fractional indices, logarithms, bounds and extended number work; function transformations, composite and inverse functions; and vectors, 3D trigonometry, linear programming, discrete mathematics, statistics and probability.",
  units: [unit1, unit2, unit3],
  myp: { subject: "maths-extended", year: 4 },
};
