import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edm8-u1",
  code: "1",
  title: "Number",
  description: "Calculate with negative numbers, powers, roots, HCF and LCM, fractions and percentages, and solve problems involving ratio and proportion.",
  lessons: [lesson11, lesson12, lesson13],
};
