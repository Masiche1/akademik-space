import type { Unit } from "../../../types.ts";
import { lesson311 } from "./lesson-3-1.ts";
import { lesson312 } from "./lesson-3-2.ts";
import { lesson313 } from "./lesson-3-3.ts";
import { exam31 } from "./lesson-3-x1.ts";
import { exam32 } from "./lesson-3-x2.ts";
import { exam33 } from "./lesson-3-x3.ts";
import { exam34 } from "./lesson-3-x4.ts";
import { exam35 } from "./lesson-3-x5.ts";

export const unit3: Unit = {
  id: "edps3-u3",
  code: "3",
  title: "Materials, Forces, Sound and Earth & Space",
  description:
    "States of matter and material changes, magnets and forces, sound properties, and Earth's movements and the solar system.",
  lessons: [lesson311, lesson312, lesson313, exam31, exam32, exam33, exam34, exam35],
};
