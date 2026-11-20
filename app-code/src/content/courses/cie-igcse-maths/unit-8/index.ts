import type { Unit } from "../../../types.ts";
import { lesson81 } from "./lesson-8-1.ts";
import { lesson82 } from "./lesson-8-2.ts";
import { lesson83 } from "./lesson-8-3.ts";

export const unit8: Unit = {
  id: "ciem-u8",
  code: "8",
  title: "Probability",
  description:
    "Single-event probability, probability trees, two-way tables, conditional probability and Venn diagrams — Cambridge IGCSE Mathematics 0580, Extended tier.",
  lessons: [lesson81, lesson82, lesson83],
};
