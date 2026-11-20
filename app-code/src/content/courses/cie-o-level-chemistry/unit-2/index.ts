import type { Unit } from "../../../types.ts";
import { lesson121 } from "./lesson-2-1.ts";
import { lesson122 } from "./lesson-2-2.ts";
import { lesson123 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "olchem-u2",
  code: "2",
  title: "Atoms, Elements and Compounds",
  description:
    "Atomic structure, isotopes, electron arrangement, chemical bonding and the periodic table — Cambridge O Level Chemistry 5070.",
  lessons: [lesson121, lesson122, lesson123],
};
