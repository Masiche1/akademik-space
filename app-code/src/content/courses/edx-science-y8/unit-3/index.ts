import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "esc8-u3",
  code: "3",
  title: "Physics: Forces, Energy and Electricity",
  description: "Describe forces and calculate resultant force and speed, track energy stores and transfers, work out power, efficiency and energy costs, and analyse series and parallel circuits using V = IR.",
  lessons: [lesson31, lesson32, lesson33],
};
