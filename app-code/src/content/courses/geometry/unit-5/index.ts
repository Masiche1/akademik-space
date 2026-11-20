import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "geo-u5",
  code: "5",
  title: "Coordinate Geometry, Area and Volume",
  description: "Use coordinate methods to prove geometric relationships and measure polygons, apply volume and surface-area formulas to familiar and composite solids, and use geometric models for density, design constraints, cross-sections, and scale. Connect algebraic reasoning with real-world spatial problems while keeping units and exact expressions clear.",
  lessons: [lesson51, lesson52, lesson53],
};
