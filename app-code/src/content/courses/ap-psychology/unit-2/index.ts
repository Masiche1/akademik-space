import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";

export const unit2: Unit = {
  id: "appsych-u2",
  code: "2",
  title: "Development and Cognition",
  description: "Piaget's stages, attachment, moral development, and cognitive processes.",
  lessons: [lesson21, lesson22],
};
