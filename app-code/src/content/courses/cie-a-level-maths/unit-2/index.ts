import type { Unit } from "../../../types.ts";
import { lesson121 } from "./lesson-2-1.ts";
import { lesson122 } from "./lesson-2-2.ts";
import { lesson123 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "cial-m-unit-2",
  code: "2",
  title: "Trigonometry and Circular Measure",
  description:
    "Radians, arc length and sector area, trigonometric identities, solving trig equations, and graphs of sin, cos and tan.",
  lessons: [lesson121, lesson122, lesson123],
};
