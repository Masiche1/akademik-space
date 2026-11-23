import type { Unit } from "../../../types.ts";
import { lesson121 } from "./lesson-12-1.ts";
import { lesson122 } from "./lesson-12-2.ts";
import { lesson123 } from "./lesson-12-3.ts";

export const unit12: Unit = {
  id: "ecs11-u12",
  code: "12",
  title: "Databases",
  description:
    "Relational modelling, SQL, normalisation, joins, transactions and database security.",
  lessons: [lesson121, lesson122, lesson123],
};
