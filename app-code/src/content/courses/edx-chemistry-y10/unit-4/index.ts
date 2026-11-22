import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ech10-u4",
  code: "4",
  title: "Investigative and Practical Skills",
  description:
    "Titration technique, qualitative analysis, rates of reaction experiments, calorimetry and electrolysis.",
  lessons: [lesson41, lesson42, lesson43],
};
