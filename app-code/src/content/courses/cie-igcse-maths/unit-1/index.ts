import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ciem-u1",
  code: "1",
  title: "Number",
  description:
    "Types of number, prime factorisation, HCF and LCM, recurring decimals, the laws of indices, standard form, upper and lower bounds, and surds — Cambridge IGCSE Mathematics 0580, Extended tier.",
  lessons: [lesson11, lesson12, lesson13],
};
