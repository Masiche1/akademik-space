import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "phys11-u4",
  code: "4",
  title: "Waves and Modern Physics",
  description: "Analyze transverse and longitudinal waves, reflection, refraction, diffraction, interference and standing waves, the electromagnetic spectrum and photon energy, the photoelectric effect, and how waves carry and store information in modern technology.",
  lessons: [lesson41, lesson42, lesson43],
};
