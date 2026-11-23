import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-2-1.ts";
import { lesson72 } from "./lesson-2-2.ts";
import { lesson73 } from "./lesson-2-3.ts";
import { exam21 } from "./lesson-2-x1.ts";
import { exam22 } from "./lesson-2-x2.ts";
import { exam23 } from "./lesson-2-x3.ts";
import { exam24 } from "./lesson-2-x4.ts";
import { exam25 } from "./lesson-2-x5.ts";

export const unit2: Unit = {
  id: "edpm6-u2",
  code: "2",
  title: "Fractions, Decimals, Percentages, Ratio and Algebra",
  description:
    "Fraction operations with mixed numbers, decimals and percentages, ratio and proportion, and introductory algebra.",
  lessons: [lesson71, lesson72, lesson73, exam21, exam22, exam23, exam24, exam25],
};
