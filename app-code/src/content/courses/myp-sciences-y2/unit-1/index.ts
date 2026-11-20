import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "myps2-u1",
  code: "1",
  title: "Atoms and Reactions",
  description: "Explore the structure of atoms and the layout of the periodic table, write chemical formulae and word equations, investigate chemical reactions and energy changes, and use the pH scale and neutralisation to explain acids, alkalis and everyday uses such as antacids and soil treatment.",
  lessons: [lesson11, lesson12, lesson13],
};
