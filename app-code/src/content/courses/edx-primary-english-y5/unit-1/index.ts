import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-1-1.ts";
import { lesson102 } from "./lesson-1-2.ts";
import { lesson103 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edpe5-u1",
  code: "1",
  title: "Vocabulary and Word Study",
  description:
    "Homophones, precise vocabulary, prefixes and suffixes, Greek and Latin roots, idioms, similes and metaphors.",
  lessons: [lesson101, lesson102, lesson103],
};
