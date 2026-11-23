import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";

export const unit1: Unit = {
  id: "apsm-u1",
  code: "1",
  title: "Academic Inquiry and Question Formation",
  description: "Forming research questions, identifying credible sources, and navigating information landscapes.",
  lessons: [lesson11, lesson12],
};
