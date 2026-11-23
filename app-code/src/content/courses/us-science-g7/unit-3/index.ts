import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "s7-u3",
  code: "3",
  title: "Earth Science: Earth's Systems",
  description:
    "Explore the rock cycle and plate tectonics, how the Sun and gravity drive the water cycle and weather, and how resources, natural hazards and human activities shape life on Earth.",
  lessons: [lesson31, lesson32, lesson33],
};
