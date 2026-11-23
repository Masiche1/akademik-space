import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";

export const unit3: Unit = {
  id: "apmt-u3",
  code: "3",
  title: "Harmony and Chords",
  description: "Chord construction, harmonic progressions, and cadences.",
  lessons: [lesson31, lesson32],
};
