import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edm9-u4",
  code: "4",
  title: "Statistics and Probability",
  description: "Estimate averages from grouped data, calculate combined probabilities with tree diagrams, Venn diagrams and two-way tables, and judge how data is collected and presented.",
  lessons: [lesson41, lesson42, lesson43],
};
