import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieOLevelPsychology: Course = {
  id: "cie-o-level-psychology",
  title: "Cambridge O Level Psychology 2219",
  shortTitle: "O Level Psychology",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — Psychology 2219",
  description:
    "Cambridge O Level Psychology 2219 covering approaches to psychology, developmental psychology, cognitive processes, social psychology, individual differences (personality and intelligence) and psychopathology.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: { qualification: "o-level", subject: "psychology-2219" },
};
