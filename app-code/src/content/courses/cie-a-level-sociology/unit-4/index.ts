import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "asoc-unit-4",
  code: "4",
  title: "Education",
  description:
    "Theories of education, social mobility, curriculum, intelligence and attainment by class, ethnicity and gender — Cambridge 9699 Paper 3.",
  lessons: [lesson41, lesson42, lesson43],
};
