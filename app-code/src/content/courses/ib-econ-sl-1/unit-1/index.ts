import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";
import { lesson14 } from "./lesson-1-4.ts";

export const unit1: Unit = {
  id: "econ-u1",
  code: "1",
  title: "The Basic Economic Problem and Markets",
  description: "Scarcity, choice and opportunity cost; factors of production and the production possibility frontier; and the main market structures from perfect competition to monopoly.",
  lessons: [lesson11, lesson12, lesson13, lesson14],
};
