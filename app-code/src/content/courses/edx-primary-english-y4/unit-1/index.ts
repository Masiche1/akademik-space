import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-1-1.ts";
import { lesson102 } from "./lesson-1-2.ts";
import { lesson103 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "edpe4-u1",
  code: "1",
  title: "Spelling and Word Knowledge",
  description:
    "Complex prefixes and suffixes, homophones, commonly misspelt words, spelling patterns and word origins.",
  lessons: [lesson101, lesson102, lesson103],
};
