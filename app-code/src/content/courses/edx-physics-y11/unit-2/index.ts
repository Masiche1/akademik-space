import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "eph11-u2",
  code: "2",
  title: "Magnetism and Electromagnetism",
  description: "Study magnetic fields and electromagnets, the motor effect, electromagnetic induction and generators, transformers and power transmission, and the generation and evaluation of energy resources.",
  lessons: [lesson21, lesson22, lesson23],
};
