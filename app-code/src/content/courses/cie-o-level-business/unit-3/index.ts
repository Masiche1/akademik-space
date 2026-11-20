import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "olbus-u3",
  code: "3",
  title: "Operations Management",
  description:
    "Production methods, quality, inventory and productivity — Cambridge O Level Business 7100.",
  lessons: [lesson31, lesson32, lesson33],
};
