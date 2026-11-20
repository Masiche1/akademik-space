import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";

export const unit4: Unit = {
  id: "cieict-u4",
  code: "4",
  title: "ICT Systems and Exam Technique",
  description:
    "ICT system components, systems development lifecycle and critical evaluation technique — Cambridge IGCSE ICT 0413.",
  lessons: [lesson41, lesson42],
};
