import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "bio9-u2",
  code: "2",
  title: "Energy in Living Systems",
  description:
    "Follow energy and matter through living systems: how photosynthesis captures light energy, how cellular respiration releases it as ATP, and how carbon cycles and energy flows through ecosystems.",
  lessons: [lesson21, lesson22, lesson23],
};
