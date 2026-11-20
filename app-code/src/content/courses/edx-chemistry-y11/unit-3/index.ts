import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ech11-u3",
  code: "3",
  title: "Organic Chemistry",
  description: "Study crude oil, fuels and cracking, alkanes and alkenes with isomers and naming, alcohols, carboxylic acids and esters, and addition and condensation polymers.",
  lessons: [lesson31, lesson32, lesson33],
};
