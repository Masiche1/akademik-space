import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ela11-u3",
  code: "3",
  title: "Writing and Language",
  description:
    "Write rhetorical analysis that examines the rhetorical situation and a nuanced, qualified argument; build synthesis essays that converse with sources and personal narratives with voice, detail and reflection; and master advanced conventions, including contested usage, hyphenation and syntax chosen for effect.",
  lessons: [lesson31, lesson32, lesson33],
};
