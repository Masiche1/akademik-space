import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "olep-unit-6",
  code: "6",
  title: "Psychopathology",
  description:
    "Anxiety, stress, depression, OCD, schizophrenia — biological and psychological explanations, treatments and evaluation.",
  lessons: [lesson61, lesson62, lesson63],
};
