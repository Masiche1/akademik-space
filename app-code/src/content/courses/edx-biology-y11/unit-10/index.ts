import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "ebi11-u10",
  code: "10",
  number: 10,
  title: "Organisation of Multicellular Organisms",
  description:
    "Studying how specialised cells form tissues, tissues form organs and organs form systems, and how the structure of major animal and plant organs suits their functions.",
  lessons: [lesson101, lesson102, lesson103],
};
