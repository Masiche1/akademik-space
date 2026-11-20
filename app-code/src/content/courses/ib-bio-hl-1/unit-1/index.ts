import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "biohl-u1",
  code: "1",
  title: "Nucleic Acids and Protein Synthesis",
  description: "Additional higher level detail of DNA replication machinery, mRNA processing, translation and the mechanisms that regulate gene expression.",
  lessons: [lesson11, lesson12, lesson13],
};
