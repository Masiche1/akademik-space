import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "physhl-u4",
  code: "4",
  title: "Electromagnetic Induction and AC — HL Extension",
  description:
    "Additional higher level detail of Faraday's and Lenz's laws of electromagnetic induction, alternating current and transformers, and magnetic forces on moving charges and current-carrying conductors.",
  lessons: [lesson41, lesson42, lesson43],
};
