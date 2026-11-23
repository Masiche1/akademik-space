import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "chem12-u2",
  code: "2",
  title: "Chemical Bonding and Reactions",
  description: "Explore bonding types, chemical equations and reaction types.",
  lessons: [lesson21, lesson22, lesson23],
};
