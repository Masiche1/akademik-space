import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "ecs10-u10",
  code: "10",
  title: "Data Analytics",
  description:
    "Data sources and types, sampling and bias, data cleaning, statistical measures and data visualisation.",
  lessons: [lesson101, lesson102, lesson103],
};
