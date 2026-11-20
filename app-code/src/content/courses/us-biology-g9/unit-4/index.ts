import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "bio9-u4",
  code: "4",
  title: "Evolution and Ecology",
  description: "Weigh the evidence for common ancestry, explain natural selection, drift, gene flow and speciation, calculate allele frequencies with Hardy-Weinberg, and analyze populations, biodiversity and human impacts on ecosystems.",
  lessons: [lesson41, lesson42, lesson43],
};
