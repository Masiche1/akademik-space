import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "geo-u2",
  code: "2",
  title: "Fluvial and Coastal Systems",
  description: "River processes and landforms, coastal processes and landforms, and drainage basin management and flood control strategies.",
  lessons: [lesson21, lesson22, lesson23],
};
