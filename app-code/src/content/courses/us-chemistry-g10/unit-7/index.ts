import type { Unit } from "../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "chem10-u7",
  code: "7",
  title: "Chemical Bonding and Intermolecular Forces",
  description:
    "Ionic, covalent, and metallic bonding; VSEPR molecular geometry; polarity; intermolecular forces; solubility.",
  lessons: [lesson71, lesson72, lesson73],
};
