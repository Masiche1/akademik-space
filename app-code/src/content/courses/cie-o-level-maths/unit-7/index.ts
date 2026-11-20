import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson73 } from "./lesson-7-3.ts";
import { lesson74 } from "./lesson-7-4.ts";

export const unit7: Unit = {
  id: "olm-u7",
  code: "7",
  title: "Probability",
  description: "Basic probability, combined events, Venn diagrams, two-way tables and tree diagrams.",
  lessons: [lesson71, lesson73, lesson74],
};
