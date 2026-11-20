import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "physsl-u5",
  code: "5",
  number: 5,
  title: "Electricity and Magnetism",
  description:
    "Current, voltage, resistance and Ohm's law, series and parallel circuits, e.m.f. and internal resistance, magnetic fields, electromagnetic induction and transformers.",
  lessons: [lesson51, lesson52, lesson53],
};
