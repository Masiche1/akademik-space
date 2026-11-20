import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "pypl-u1",
  code: "1",
  title: "Oral Language",
  description:
    "Build listening and speaking skills — active listening, retelling, asking questions, discussions and presentations — through the transdisciplinary themes Who We Are and How We Express Ourselves.",
  lessons: [lesson11, lesson12, lesson13],
};
