import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edm7-u2",
  code: "2",
  title: "Fractions, Decimals and Percentages",
  description:
    "Equivalent fractions, adding and subtracting fractions, multiplying fractions and mixed numbers, decimals and percentage conversion.",
  lessons: [lesson21, lesson22, lesson23],
};
