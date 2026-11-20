import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "myps3-u1",
  code: "1",
  title: "Atoms, Reactions and Materials",
  description: "Describe atomic structure and electron arrangement, use the periodic table to predict properties, write and balance chemical equations, identify reaction types and energy changes, and explain acids, alkalis, neutralisation and salt preparation.",
  lessons: [lesson11, lesson12, lesson13],
};
