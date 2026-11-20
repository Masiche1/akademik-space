import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "geo-u1",
  code: "1",
  title: "Congruence and Triangle Proofs",
  description: "Develop precise geometric reasoning with angle relationships, triangle congruence criteria, two-column proofs, and fundamental triangle theorems. Use diagrams described in words, algebraic angle measures, and justified reasoning to establish congruence and solve problems.",
  lessons: [lesson11, lesson12, lesson13],
};
