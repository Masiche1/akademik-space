import type { Unit } from "../../../types.ts";
import { lesson401 } from "./lesson-4-1.ts";
import { lesson402 } from "./lesson-4-2.ts";
import { lesson403 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edxbtecit-u4",
  code: "4",
  title: "Unit 4: Relational Database Development",
  description:
    "Relational database concepts, normalisation, SQL queries (SELECT, INSERT, UPDATE, DELETE), database design, testing and deployment.",
  lessons: [lesson401, lesson402, lesson403],
};
