import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "pc-u3",
  code: "3",
  title: "Trigonometric Graphs and Triangle Trigonometry",
  description: "Graph and model with sinusoidal functions, evaluate inverse trigonometric functions and solve trigonometric equations, and solve any triangle with the Law of Sines and Law of Cosines.",
  lessons: [lesson31, lesson32, lesson33],
};
