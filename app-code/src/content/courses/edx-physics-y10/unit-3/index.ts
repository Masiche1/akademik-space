import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "eph10-u3",
  code: "3",
  title: "Waves",
  description: "Study wave properties and wave speed, reflection, refraction and Snell's law, the electromagnetic spectrum, total internal reflection, sound waves and echoes, and oscilloscope traces.",
  lessons: [lesson31, lesson32, lesson33],
};
