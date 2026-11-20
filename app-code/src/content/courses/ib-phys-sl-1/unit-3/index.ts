import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "physsl-u3",
  code: "3",
  title: "Thermal Physics",
  description:
    "Temperature scales, internal energy, specific heat and latent heat, the mechanisms of heat transfer, and the gas laws including the ideal gas equation.",
  lessons: [lesson31, lesson32, lesson33],
};
