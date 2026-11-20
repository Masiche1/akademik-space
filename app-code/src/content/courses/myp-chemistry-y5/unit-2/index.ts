import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "mypc5-unit-2",
  number: 2,
  code: "2",
  title: "Reaction Rates, Energetics and Electrochemistry",
  description:
    "Factors affecting reaction rate, reversible reactions and equilibrium, energy profiles and thermochemistry, electrochemical cells, redox and electrolysis.",
  lessons: [lesson21, lesson22, lesson23],
};
