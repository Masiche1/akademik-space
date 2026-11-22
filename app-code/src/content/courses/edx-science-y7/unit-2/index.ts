import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "esc7-u2",
  code: "2",
  title: "Chemistry: Materials and Reactions",
  description:
    "States of matter and particle theory, mixtures and separation techniques, chemical reactions and acids/alkalis.",
  lessons: [lesson21, lesson22, lesson23],
};
