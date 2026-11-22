import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-1-1.ts";
import { lesson102 } from "./lesson-1-2.ts";
import { lesson103 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edxbteceng-u1",
  code: "1",
  title: "Unit 1: Engineering Principles",
  description:
    "Engineering data and calculations, mechanical principles (forces, materials, stress and strain), and electrical principles (circuits, Ohm's law, power) — the externally assessed core of the qualification.",
  lessons: [lesson101, lesson102, lesson103],
};
