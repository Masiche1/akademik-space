import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "eiasbiz-u4",
  code: "4",
  title: "Operations Management",
  description:
    "WBP01 Unit 4: production methods, quality management, supply chain, lean operations, location, facilities, technology and health and safety.",
  lessons: [lesson41, lesson42, lesson43],
};
