import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "biohl-u4",
  code: "4",
  number: 4,
  title: "Evolutionary Biology",
  description:
    "Analyse the modes of natural selection and their genetic outcomes, distinguish the mechanisms of allopatric and sympatric speciation, and apply the Hardy-Weinberg principle to quantify allele frequencies and the effects of evolutionary forces.",
  lessons: [lesson41, lesson42, lesson43],
};
