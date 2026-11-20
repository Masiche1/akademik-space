import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "physhl-u5",
  code: "5",
  title: "Quantum Physics — HL Extension",
  description: "Additional higher level detail of the photoelectric effect and Einstein's photoelectric equation, matter waves and the de Broglie wavelength, atomic energy levels, emission spectra and lasers.",
  lessons: [lesson51, lesson52, lesson53],
};
