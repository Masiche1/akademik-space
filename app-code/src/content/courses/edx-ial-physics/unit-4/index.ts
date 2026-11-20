import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edialphys-u4",
  code: "4",
  title: "Further Mechanics, Fields and Particles",
  description:
    "WPH14: further mechanics (momentum, energy, circular motion), gravitational, electric and magnetic fields, and the standard model of particle physics.",
  lessons: [lesson41, lesson42, lesson43],
};
