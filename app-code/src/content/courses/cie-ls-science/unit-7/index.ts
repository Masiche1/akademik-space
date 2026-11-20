import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "cils-u7",
  code: "7",
  title: "Electricity, Magnetism and Waves",
  description:
    "Circuits, Ohm's law, power, magnetism, electromagnets, motors, sound and light — Cambridge Lower Secondary Science 0893.",
  lessons: [lesson71, lesson72, lesson73],
};
