import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "eias-psych-u4",
  code: "4",
  title: "Psychopathology",
  description:
    "9PS01 Unit 4: defining/classifying abnormality, depression, anxiety disorders, schizophrenia and treatments.",
  lessons: [lesson41, lesson42, lesson43],
};
