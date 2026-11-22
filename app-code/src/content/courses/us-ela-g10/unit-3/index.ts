import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ela10-u3",
  code: "3",
  title: "Writing and Language",
  description:
    "Write literary analysis with a debatable thesis, embedded quotations and real commentary; synthesize multiple sources with MLA in-text citations; revise drafts for purpose and audience; and polish usage and style with correct agreement, who and whom, concision, varied sentences, hyphens, apostrophes and register.",
  lessons: [lesson31, lesson32, lesson33],
};
