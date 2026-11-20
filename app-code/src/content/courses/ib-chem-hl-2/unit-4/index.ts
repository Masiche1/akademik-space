import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "chemhl-u4",
  code: "4",
  title: "Equilibrium and Acid–Base Chemistry — HL Extension",
  description:
    "Additional higher level detail of the equilibrium law with Kc and Kp expressions, ICE-table calculations, pH curves and weak acid–base equilibria, and the Lewis theory of acids and bases.",
  lessons: [lesson41, lesson42, lesson43],
};
