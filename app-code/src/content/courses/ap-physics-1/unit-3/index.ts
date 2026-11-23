import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "app1-u3",
  code: "3",
  title: "Waves, Sound, and Electricity",
  description: "Wave properties, sound, electrostatics, circuits, and electromagnetic induction.",
  lessons: [lesson31, lesson32, lesson33],
};
