import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "edialphys-u5",
  code: "5",
  title: "Thermodynamics, Radiation, Oscillations and Cosmology",
  description:
    "WPH15: the gas laws and first law of thermodynamics, the photoelectric effect and quantum radiation, nuclear decay, simple harmonic motion and resonance, astrophysics and cosmological redshift.",
  lessons: [lesson51, lesson52, lesson53],
};
