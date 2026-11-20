import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "olcs-u10",
  code: "10",
  title: "Databases",
  description:
    "Database concepts, relational databases and queries — Cambridge O Level Computer Science 2210 topic 10.",
  lessons: [lesson101, lesson102, lesson103],
};
