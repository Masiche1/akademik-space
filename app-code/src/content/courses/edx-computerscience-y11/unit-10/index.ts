import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "ecs11-u10",
  code: "10",
  number: 10,
  title: "Databases",
  description:
    "Relational database design, SQL querying, normalisation, security and integrity.",
  lessons: [lesson101, lesson102, lesson103],
};
