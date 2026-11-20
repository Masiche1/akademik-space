import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "mypm1-u3",
  code: "3",
  title: "Geometry, Measurement and Data",
  description: "Use angle facts and the properties of shapes, find perimeter, area, volume and surface area, convert metric units, and analyse data using averages, charts and probability.",
  lessons: [lesson31, lesson32, lesson33],
};
