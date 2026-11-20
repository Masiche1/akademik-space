import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "theatre-u2",
  code: "2",
  title: "Play Analysis and Context",
  description:
    "Analyse dramatic structure, character and relationships, and situate plays within theatre history and cultural context.",
  lessons: [lesson21, lesson22, lesson23],
};
