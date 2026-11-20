import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "music-u2",
  code: "2",
  title: "Contextual Studies: Western Traditions",
  description:
    "Explore Western music history from Baroque through Romantic periods, the origins of jazz and popular music, and music's relationship to society.",
  lessons: [lesson21, lesson22, lesson23],
};
