import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "biosl-u2",
  number: 2,
  code: "2",
  title: "Molecular Biology and Genetics",
  description: "DNA and RNA structure, semi-conservative replication, transcription and translation, the immune response, meiosis and inheritance, and biotechnology.",
  lessons: [lesson21, lesson22, lesson23],
};
