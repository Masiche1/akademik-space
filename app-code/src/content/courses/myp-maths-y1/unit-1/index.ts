import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "mypm1-u1",
  code: "1",
  title: "Number",
  description: "Order and round numbers, use the order of operations, calculate with negative numbers, work with factors, multiples, primes, squares and cubes, and convert between fractions, decimals and percentages in real-life problems.",
  lessons: [lesson11, lesson12, lesson13],
};
