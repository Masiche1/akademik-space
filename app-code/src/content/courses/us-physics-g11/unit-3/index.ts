import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";

export const unit3: Unit = {
  id: "phys11-u3",
  code: "3",
  title: "Electricity",
  description:
    "Use current, voltage and resistance with Ohm's law, analyze series and parallel circuits, and calculate electrical power, energy use, cost and efficiency, including how the grid delivers energy with minimal losses.",
  lessons: [lesson31, lesson32],
};
