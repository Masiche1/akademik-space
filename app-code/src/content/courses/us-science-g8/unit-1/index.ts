import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "s8-u1",
  code: "1",
  title: "Physical Science: Forces, Motion and Energy",
  description:
    "Describe motion with speed and distance-time graphs, apply Newton's laws and F = ma, explain gravity, electric and magnetic forces, and analyze how kinetic and potential energy are transferred and conserved.",
  lessons: [lesson11, lesson12, lesson13],
};
