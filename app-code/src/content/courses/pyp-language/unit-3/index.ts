import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "pypl-u3",
  code: "3",
  title: "Writing",
  description:
    "Build sentence construction, punctuation, and writing for different purposes — narrative, recount and report — plus planning, revising and publishing skills, through the transdisciplinary theme How We Express Ourselves.",
  lessons: [lesson31, lesson32, lesson33],
};
