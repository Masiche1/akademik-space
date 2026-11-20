import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "physhl-u3",
  code: "3",
  title: "Wave Behaviour — HL Extension",
  description:
    "Additional higher level detail of standing waves and harmonics, single-slit diffraction and diffraction gratings, the Doppler effect, and wave energy and intensity.",
  lessons: [lesson31, lesson32, lesson33],
};
