import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "app2-u3",
  code: "3",
  title: "Optics, Quantum, and Nuclear Physics",
  description: "Reflection and refraction, lenses, wave optics, photoelectric effect, and nuclear processes.",
  lessons: [lesson31, lesson32, lesson33],
};
