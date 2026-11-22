import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edm7-u1",
  code: "1",
  title: "Number",
  description:
    "Integers and operations with negative numbers, factors, multiples, primes and prime factorisation, rounding and estimation, and BIDMAS.",
  lessons: [lesson11, lesson12, lesson13],
};
