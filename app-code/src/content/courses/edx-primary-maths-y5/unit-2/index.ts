import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-2-1.ts";
import { lesson82 } from "./lesson-2-2.ts";
import { lesson83 } from "./lesson-2-3.ts";
import { exam21 } from "./lesson-2-x1.ts";
import { exam22 } from "./lesson-2-x2.ts";
import { exam23 } from "./lesson-2-x3.ts";
import { exam24 } from "./lesson-2-x4.ts";
import { exam25 } from "./lesson-2-x5.ts";

export const unit2: Unit = {
  id: "edpm5-u2",
  code: "2",
  title: "Fractions, Decimals and Percentages",
  description:
    "Adding and subtracting fractions with related denominators, mixed numbers and improper fractions, multiplying fractions by integers, fractions of amounts, decimal operations, and percentages.",
  lessons: [lesson81, lesson82, lesson83, exam21, exam22, exam23, exam24, exam25],
};
