import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "apcab-u3",
  code: "3",
  title: "Applications of Derivatives and Intro to Integration",
  description: "Apply the Mean Value Theorem, find extrema, sketch curves, optimize, and connect derivatives to accumulation.",
  lessons: [lesson31, lesson32, lesson33],
};
