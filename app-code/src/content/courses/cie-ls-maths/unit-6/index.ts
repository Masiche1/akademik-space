import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";
import { exam61 } from "./lesson-6-x1.ts";

export const unit6: Unit = {
  id: "cilm-u6",
  code: "6",
  title: "Measure: Area, Volume and Units",
  description:
    "Perimeter, area, volume, surface area, composite shapes, scale drawings and metric conversions — Cambridge Lower Secondary Mathematics 0862.",
  lessons: [lesson61, lesson62, lesson63, exam61],
};
