import type { Unit } from "../../../types.ts";
import { lesson301 } from "./lesson-3-1.ts";
import { lesson302 } from "./lesson-3-2.ts";
import { lesson303 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "edxbteceng-u3",
  code: "3",
  title: "Unit 3: Engineering Design",
  description:
    "The engineering design process, two-dimensional orthographic drawings with dimensions and tolerances, and three-dimensional parametric CAD modelling and simulation.",
  lessons: [lesson301, lesson302, lesson303],
};
