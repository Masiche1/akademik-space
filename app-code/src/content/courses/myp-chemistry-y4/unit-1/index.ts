import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "mypc4-unit-1",
  number: 1,
  code: "1",
  title: "Matter and Atomic Structure",
  description:
    "Particle model, states of matter, separation techniques, atomic structure, periodic trends and chemical bonding.",
  lessons: [lesson11, lesson12, lesson13],
};
