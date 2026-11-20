import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "olbio-u2",
  code: "2",
  title: "Biological Molecules and Enzymes",
  description:
    "Structure of carbohydrates, proteins and lipids; food tests; and enzyme action and factors — Cambridge O Level Biology 5090.",
  lessons: [lesson21, lesson22, lesson23],
};
