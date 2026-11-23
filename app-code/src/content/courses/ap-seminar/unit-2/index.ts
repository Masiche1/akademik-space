import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";

export const unit2: Unit = {
  id: "apsm-u2",
  code: "2",
  title: "Evidence-Based Argumentation",
  description: "Constructing arguments, synthesizing sources, and evaluating claims.",
  lessons: [lesson21, lesson22],
};
