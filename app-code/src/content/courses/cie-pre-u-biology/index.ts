import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ciePreUBiology: Course = {
  id: "cie-pre-u-biology",
  title: "Cambridge Pre-U Biology 9769",
  shortTitle: "Pre-U Biology",
  grade: "Cambridge Pre-U",
  framework: "Cambridge International Examinations — Pre-U Biology 9769",
  description:
    "Cambridge Pre-U Biology 9769 covering cell biology, biological molecules, enzymes, respiration, photosynthesis, DNA, inheritance, evolution and ecology across Papers 1-2.",
  units: [unit1, unit2, unit3],
  cie: { qualification: "pre-u", subject: "biology-9769" },
};
