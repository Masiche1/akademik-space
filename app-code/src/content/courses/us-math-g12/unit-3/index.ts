import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "m12-u3",
  code: "3",
  title: "Sequences, Series and Limits",
  description: "Work with arithmetic and geometric sequences and series, infinite series, and introductory limits and rates of change.",
  lessons: [lesson31, lesson32, lesson33],
};
