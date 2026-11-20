import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "ech11-u1",
  code: "1",
  title: "Physical Chemistry",
  description: "Study energy changes in reactions, calorimetry and bond energies, how collision theory explains rates of reaction, and how equilibrium and Le Chatelier's principle are used in the Haber process.",
  lessons: [lesson11, lesson12, lesson13],
};
