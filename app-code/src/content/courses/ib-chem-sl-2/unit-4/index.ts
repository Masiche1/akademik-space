import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "chemsl-u4",
  code: "4",
  number: 4,
  title: "Quantitative Stoichiometry",
  description:
    "Use balanced equations quantitatively: identify the limiting reagent, calculate theoretical and percentage yields and atom economy, perform acid-base and back titration calculations, and work with gas volumes, molar volume, concentration and dilution.",
  lessons: [lesson41, lesson42, lesson43],
};
