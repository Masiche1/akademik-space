import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "olec-u2",
  code: "2",
  title: "Demand and Supply",
  description:
    "Demand, supply, equilibrium, elasticity and market intervention — Cambridge O Level Economics 2281.",
  lessons: [lesson21, lesson22, lesson23],
};
