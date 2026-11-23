import type { Unit } from "../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "phys11-u10",
  code: "10",
  title: "Electricity, Magnetism, and Electromagnetic Waves",
  description:
    "Electric charge, Coulomb's law, electric fields, circuits, Ohm's law, power, magnetic fields, induction, and EM waves.",
  lessons: [lesson101, lesson102, lesson103],
};
