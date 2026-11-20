import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "pypm-u3",
  code: "3",
  title: "Statistics, Probability and Algebra",
  description:
    "Collecting and displaying data, understanding chance, and finding patterns, rules and missing numbers — connected to the transdisciplinary themes Sharing the Planet, How the World Works and How We Express Ourselves.",
  lessons: [lesson31, lesson32, lesson33],
};
