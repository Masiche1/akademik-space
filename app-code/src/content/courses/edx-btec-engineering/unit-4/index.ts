import type { Unit } from "../../../types.ts";
import { lesson401 } from "./lesson-4-1.ts";
import { lesson402 } from "./lesson-4-2.ts";
import { lesson403 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edxbteceng-u4",
  code: "4",
  title: "Unit 4: Engineering Project",
  description:
    "Project management for engineering products from concept to solution: specification and feasibility, planning and scheduling, risk and quality management, and evaluation.",
  lessons: [lesson401, lesson402, lesson403],
};
