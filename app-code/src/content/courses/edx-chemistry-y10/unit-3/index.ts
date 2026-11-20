import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ech10-u3",
  code: "3",
  title: "Inorganic Chemistry",
  description: "Study Group 1 and Group 7, the gases in the atmosphere, the reactivity series, extraction of metals, rusting, acids and salts, and chemical tests for ions and gases.",
  lessons: [lesson31, lesson32, lesson33],
};
