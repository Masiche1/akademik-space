import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "cils-u6",
  code: "6",
  title: "Forces and Motion",
  description:
    "Forces, motion, gravity, pressure, moments, fluids and buoyancy — Cambridge Lower Secondary Science 0893.",
  lessons: [lesson61, lesson62, lesson63],
};
