import type { Unit } from "../../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";

export const unit9: Unit = {
  id: "edxbteceng-u9",
  code: "9",
  number: 9,
  title: "Unit 9: Engineering Mechanics and Machine Elements",
  description:
    "Simple mechanisms and levers, gear and belt power transmission, bearings, lubrication and bolted joints.",
  lessons: [lesson91, lesson92, lesson93],
};
