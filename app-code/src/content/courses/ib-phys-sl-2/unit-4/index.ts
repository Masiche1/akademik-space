import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "physsl-u4",
  code: "4",
  number: 4,
  title: "Waves",
  description:
    "Wave properties and the wave equation, reflection, refraction and diffraction, superposition and interference, standing waves, the Doppler effect and the electromagnetic spectrum.",
  lessons: [lesson41, lesson42, lesson43],
};
