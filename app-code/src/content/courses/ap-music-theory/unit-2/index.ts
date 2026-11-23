import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";

export const unit2: Unit = {
  id: "apmt-u2",
  code: "2",
  title: "Scales and Modes",
  description: "Major/minor scales, modes, and their construction.",
  lessons: [lesson21, lesson22],
};
