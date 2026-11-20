import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "olbio-u1",
  code: "1",
  title: "Cell Biology",
  description:
    "Cell structure, specialised cells, and transport across cell membranes — Cambridge O Level Biology 5090.",
  lessons: [lesson11, lesson12, lesson13],
};
