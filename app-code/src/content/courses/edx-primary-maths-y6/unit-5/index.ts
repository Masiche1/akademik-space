import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edpm6-u5",
  code: "5",
  title: "Number Theory and Bidmas",
  description:
    "Year 6: prime factorisation, HCF and LCM, indices, order of operations, and decimals and fractions as exact values.",
  lessons: [lesson51, lesson52, lesson53],
};
