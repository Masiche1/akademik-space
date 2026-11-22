import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "eias-psych-u2",
  code: "2",
  title: "Memory",
  description:
    "9PS01 Unit 2: memory models, encoding, forgetting, retrieval, mnemonics, eyewitness testimony and evaluation.",
  lessons: [lesson21, lesson22, lesson23],
};
