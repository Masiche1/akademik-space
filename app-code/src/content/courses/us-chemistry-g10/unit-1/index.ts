import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "chem10-u1",
  code: "1",
  title: "Atomic Structure and the Periodic Table",
  description: "Explore the structure of the atom, isotopes and average atomic mass, electron configurations and emission spectra, periodic trends explained from atomic structure, and nuclear chemistry including decay, fission, fusion and half-life.",
  lessons: [lesson11, lesson12, lesson13],
};
