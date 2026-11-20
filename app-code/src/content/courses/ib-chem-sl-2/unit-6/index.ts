import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "chemsl-u6",
  code: "6",
  number: 6,
  title: "Equilibrium, Electrochemistry and Organic Chemistry",
  description: "Explain dynamic equilibrium and apply Le Chatelier's principle and Kc calculations, balance redox half-equations and analyse electrochemical cells and electrolysis, and introduce organic hydrocarbons, functional groups, isomerism, chromatography and spectroscopy.",
  lessons: [lesson61, lesson62, lesson63],
};
