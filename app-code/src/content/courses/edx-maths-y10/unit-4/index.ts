import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edm10-u4",
  code: "4",
  title: "Statistics and Probability",
  description:
    "Cumulative frequency and histograms, tree diagrams and conditional probability, and set notation with Venn diagrams, including probability from Venn diagrams.",
  lessons: [lesson41, lesson42, lesson43],
};
