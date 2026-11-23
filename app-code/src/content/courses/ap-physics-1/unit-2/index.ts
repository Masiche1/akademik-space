import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "app1-u2",
  code: "2",
  title: "Energy, Momentum, and Rotation",
  description: "Work and energy, momentum conservation, rotational motion, and simple harmonic motion.",
  lessons: [lesson21, lesson22, lesson23],
};
