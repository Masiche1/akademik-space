import type { Unit } from "../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "phys11-u7",
  code: "7",
  title: "Newton's Laws, Momentum, and Gravitation Deep Dive",
  description:
    "Newton's three laws in depth, momentum and collisions, impulse, gravitation, orbital mechanics, and real-world applications.",
  lessons: [lesson71, lesson72, lesson73],
};
