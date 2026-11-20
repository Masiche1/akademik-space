import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const mypMathsExtY5: Course = {
  id: "myp-maths-ext-y5",
  title: "MYP 5 Extended Mathematics",
  shortTitle: "Ext Maths MYP 5",
  grade: "MYP 5",
  framework: "IB Middle Years Programme Mathematics",
  description:
    "Advanced logarithms and bounds, sequences and financial mathematics, proofs and sets; function transformations, composite and inverse functions, rational/trigonometric/exponential graphs; and vectors, 3D trigonometry, linear programming, graph theory, and binomial statistics.",
  units: [unit1, unit2, unit3],
  myp: { subject: "maths-extended", year: 5 },
};
