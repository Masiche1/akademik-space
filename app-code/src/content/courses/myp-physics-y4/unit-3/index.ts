import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypp4-unit-3",
  number: 3,
  code: "3",
  title: "Electricity, Magnetism and Space",
  description:
    "Circuits, current, voltage and resistance; Ohm's law and series/parallel circuits; electromagnetism, motors, generators and space physics.",
  lessons: [lesson31, lesson32, lesson33],
};
