import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "apch-u3",
  code: "3",
  title: "Thermodynamics, Electrochemistry, and Nuclear Chemistry",
  description: "Enthalpy, entropy, Gibbs free energy, electrochemistry, and nuclear processes.",
  lessons: [lesson31, lesson32, lesson33],
};
