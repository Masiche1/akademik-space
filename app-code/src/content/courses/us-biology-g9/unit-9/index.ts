import type { Unit } from "../../types.ts";
import { lesson91 } from "./lesson-9-1.ts";
import { lesson92 } from "./lesson-9-2.ts";
import { lesson93 } from "./lesson-9-3.ts";

export const unit9: Unit = {
  id: "bio9-u9",
  code: "9",
  title: "Genetics and Evolution",
  description:
    "Mendelian and non-Mendelian inheritance, genetic disorders, pedigrees, natural selection, evidence for evolution, and ecosystem dynamics.",
  lessons: [lesson91, lesson92, lesson93],
};
