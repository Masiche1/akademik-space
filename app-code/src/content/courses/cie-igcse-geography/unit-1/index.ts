import type { Unit } from "../../../types.ts";
import { lesson301 } from "./lesson-1-1.ts";
import { lesson302 } from "./lesson-1-2.ts";
import { lesson303 } from "./lesson-1-3.ts";
import { lesson304 } from "./lesson-1-4.ts";
import { lesson305 } from "./lesson-1-5.ts";

export const unit1: Unit = {
  id: "cieigeo-u1",
  code: "1",
  title: "Physical Geography",
  description:
    "Freshwater systems, weather/climate, rocks, natural hazards, coasts and glaciation — Cambridge IGCSE Geography 0460 Paper 1.",
  lessons: [lesson301, lesson302, lesson303, lesson304, lesson305],
};
