import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ediasphys-u1",
  code: "1",
  title: "Mechanics and Materials",
  description:
    "WPH11: measurements and uncertainties; mechanics of particles and materials (forces, momentum, energy, SHM); electricity — Ohm's law, circuits and static charge.",
  lessons: [lesson11, lesson12, lesson13],
};
