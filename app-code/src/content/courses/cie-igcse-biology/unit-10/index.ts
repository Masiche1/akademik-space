import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "cieb-u10",
  code: "10",
  title: "Selection, Evolution and Ecology",
  description:
    "Natural selection, evidence for evolution, energy flow, nutrient cycles and human impacts — Cambridge IGCSE Biology 0653.",
  lessons: [lesson101, lesson102, lesson103],
};
