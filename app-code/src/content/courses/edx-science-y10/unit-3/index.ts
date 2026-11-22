import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "esc10-u3",
  code: "3",
  title: "Physics",
  description:
    "Forces, motion and energy, light and electricity, radioactivity, pressure and moments.",
  lessons: [lesson31, lesson32, lesson33],
};
