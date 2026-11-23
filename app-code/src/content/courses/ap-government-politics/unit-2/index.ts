import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";

export const unit2: Unit = {
  id: "apgov-u2",
  code: "2",
  title: "Political Behavior and Participation",
  description: "Public opinion, voting behavior, participation, and media effects.",
  lessons: [lesson21, lesson22],
};
