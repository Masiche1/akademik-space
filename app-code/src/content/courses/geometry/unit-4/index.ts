import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "geo-u4",
  code: "4",
  title: "Circles",
  description: "Explore circle geometry through arc, chord, and angle relationships; tangent and secant theorems; segment-length products; arc length and sector area; and coordinate equations of circles.",
  lessons: [lesson41, lesson42, lesson43],
};
