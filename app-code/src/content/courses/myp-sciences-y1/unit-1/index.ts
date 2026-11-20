import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "myps1-u1",
  code: "1",
  title: "Being a Scientist and Matter",
  description: "Learn to work safely and plan fair tests, measure and record data and spot trends, explain solids, liquids and gases with the particle model, interpret heating curves, and separate mixtures using filtration, evaporation, distillation and chromatography.",
  lessons: [lesson11, lesson12, lesson13],
};
