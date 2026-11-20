import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "s7-u2",
  code: "2",
  title: "Physical Science: Matter and Its Interactions",
  description: "Model atoms, molecules, elements, compounds and mixtures, calculate density, explain states and changes of matter with the particle model, and use conservation of mass and energy changes to understand chemical reactions.",
  lessons: [lesson21, lesson22, lesson23],
};
