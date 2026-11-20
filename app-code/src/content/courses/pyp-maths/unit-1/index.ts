import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "pypm-u1",
  code: "1",
  title: "Number",
  description:
    "Counting and place value to 1000, the four operations, fractions, money and decimals, and early algebra through number patterns — connected to the transdisciplinary themes Who We Are and How the World Works.",
  lessons: [lesson11, lesson12, lesson13],
};
