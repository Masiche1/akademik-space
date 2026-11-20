import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "phys11-u2",
  code: "2",
  title: "Energy and Fields",
  description: "Calculate work, kinetic and potential energy, power and efficiency, apply conservation of energy, analyze circular motion and universal gravitation, and use Coulomb's law, electric fields, magnetism and electromagnetic induction.",
  lessons: [lesson21, lesson22, lesson23],
};
