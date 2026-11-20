import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "langa-u2",
  code: "2",
  title: "Writing and Essay Skills",
  description:
    "Build analytical paragraphs that embed evidence, develop thesis-led essays, and practise timed writing across text types such as articles, reviews and letters.",
  lessons: [lesson21, lesson22, lesson23],
};
