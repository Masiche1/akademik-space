import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";

export const unit4: Unit = {
  id: "olcs-u4",
  code: "4",
  title: "Software",
  description:
    "Types of software, operating systems, programming languages and translators — Cambridge O Level Computer Science 2210 topic 4.",
  lessons: [lesson41, lesson42],
};
