import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "edxbteceng-u10",
  code: "10",
  number: 10,
  title: "Unit 10: Maintenance and Reliability Engineering",
  description:
    "Reliability metrics and life data, maintenance strategies and planning, and condition monitoring with root-cause analysis.",
  lessons: [lesson101, lesson102, lesson103],
};
