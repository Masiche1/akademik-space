import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "esc8-u2",
  code: "2",
  title: "Chemistry: Particles and Reactions",
  description: "Use the particle model to explain states of matter, classify elements, compounds and mixtures, separate mixtures, and describe chemical reactions, acids and neutralisation.",
  lessons: [lesson21, lesson22, lesson23],
};
