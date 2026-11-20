import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "mypm2-u1",
  code: "1",
  title: "Number and Proportion",
  description: "Use the laws of indices and standard form for very large and very small numbers, calculate percentage change, reverse percentages, interest, discounts and tax, and solve problems with direct and inverse proportion, speed, density, unit rates and exchange rates.",
  lessons: [lesson11, lesson12, lesson13],
};
