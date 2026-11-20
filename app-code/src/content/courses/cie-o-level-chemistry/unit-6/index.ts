import type { Unit } from "../../../types.ts";
import { lesson161 } from "./lesson-6-1.ts";
import { lesson162 } from "./lesson-6-2.ts";
import { lesson163 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "olchem-u6",
  code: "6",
  title: "Chemical Reactions",
  description:
    "Reaction rates, collision theory, catalysts, reversible reactions, equilibrium and industrial processes — Cambridge O Level Chemistry 5070.",
  lessons: [lesson161, lesson162, lesson163],
};
