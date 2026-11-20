import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ech10-u1",
  code: "1",
  title: "Principles of Chemistry",
  description: "Study states of matter and diffusion, methods of separating mixtures, atomic structure and the periodic table, and how to write formulae, balance equations and calculate relative formula mass.",
  lessons: [lesson11, lesson12, lesson13],
};
