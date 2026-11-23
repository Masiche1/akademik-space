import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "edps6-u6",
  code: "6",
  title: "Energy, Electricity and Earth Processes",
  description:
    "Year 6: energy transfers, series and parallel circuits, the rock cycle, the water cycle and forces in the solar system.",
  lessons: [lesson61, lesson62, lesson63],
};
