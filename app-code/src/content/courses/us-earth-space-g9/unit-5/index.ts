import type { Unit } from "../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "ess9-u5",
  code: "5",
  title: "Earth's Systems Deep Dive",
  description:
    "Earth's systems interactions, feedback loops, cycles, atmosphere, weather, greenhouse effect, hydrosphere, and water resources.",
  lessons: [lesson51, lesson52, lesson53],
};
