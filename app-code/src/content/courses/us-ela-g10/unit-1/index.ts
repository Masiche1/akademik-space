import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ela10-u1",
  code: "1",
  title: "Drama and Poetry",
  description:
    "Read Shakespeare closely for motive, conflict, and figurative language; analyze poetic form, imagery, and extended metaphor; and examine how authors transform source material and how the same scene changes across stage and film.",
  lessons: [lesson11, lesson12, lesson13],
};
