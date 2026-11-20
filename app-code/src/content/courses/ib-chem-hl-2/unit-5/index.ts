import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "chemhl-u5",
  code: "5",
  title: "Redox and Electrochemistry — HL Extension",
  description: "Additional higher level detail of standard electrode potentials and cell EMF calculations, electrolysis and Faraday's laws of electrolysis, and electrochemical applications including rechargeable batteries, fuel cells and corrosion.",
  lessons: [lesson51, lesson52, lesson53],
};
