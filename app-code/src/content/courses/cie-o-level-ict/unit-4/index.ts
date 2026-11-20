import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "olict-u4",
  code: "4",
  title: "Security and the Internet",
  description:
    "Network security threats and defences, internet services and the World Wide Web — Cambridge O Level ICT 7014 topics 5 and 6.",
  lessons: [lesson41, lesson42, lesson43],
};
