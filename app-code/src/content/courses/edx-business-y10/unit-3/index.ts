import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "ebz10-u3",
  code: "3",
  title: "Operations Management",
  description:
    "Production methods, quality management, inventory, supply chain and technology in operations.",
  lessons: [lesson31, lesson32, lesson33],
};
