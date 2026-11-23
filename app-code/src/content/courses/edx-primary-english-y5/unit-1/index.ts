import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-1-1.ts";
import { lesson102 } from "./lesson-1-2.ts";
import { lesson103 } from "./lesson-1-3.ts";
import { exam11 } from "./lesson-1-x1.ts";
import { exam12 } from "./lesson-1-x2.ts";
import { exam13 } from "./lesson-1-x3.ts";
import { exam14 } from "./lesson-1-x4.ts";
import { exam15 } from "./lesson-1-x5.ts";

export const unit1: Unit = {
  id: "edpe5-u1",
  code: "1",
  title: "Vocabulary and Word Study",
  description:
    "Homophones, precise vocabulary, prefixes and suffixes, Greek and Latin roots, idioms, similes and metaphors.",
  lessons: [lesson101, lesson102, lesson103, exam11, exam12, exam13, exam14, exam15],
};
