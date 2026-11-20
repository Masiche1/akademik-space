import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "chemhl-u3",
  code: "3",
  title: "Energetics and Kinetics — HL Extension",
  description:
    "Additional higher level detail of Born-Haber energy cycles and lattice enthalpy calculations, entropy and spontaneity through the Gibbs free energy, and rate laws, reaction mechanisms and activation energy.",
  lessons: [lesson31, lesson32, lesson33],
};
