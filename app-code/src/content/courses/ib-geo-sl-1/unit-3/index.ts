import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";
import { lesson34 } from "./lesson-3-4.ts";

export const unit3: Unit = {
  id: "geo-u3",
  code: "3",
  title: "Natural Hazards and Risk Management",
  description: "Tectonic hazards and their prediction and management, atmospheric and climate-related hazards, and hazard risk perception, vulnerability and management strategies.",
  lessons: [lesson31, lesson32, lesson33, lesson34],
};
