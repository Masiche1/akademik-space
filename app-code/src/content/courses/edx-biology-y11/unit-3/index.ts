import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ebi11-u3",
  code: "3",
  title: "Ecology and Biotechnology",
  description: "Study ecosystems, sampling and energy flow, the carbon and nitrogen cycles, human impacts on the environment, and food production, genetic modification and cloning.",
  lessons: [lesson31, lesson32, lesson33],
};
