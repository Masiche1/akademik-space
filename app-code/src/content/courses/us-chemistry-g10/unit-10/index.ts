import type { Unit } from "../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "chem10-u10",
  code: "10",
  title: "Organic Chemistry and Capstone",
  description:
    "Hydrocarbons, functional groups, isomers, polymers, biochemistry, and integrated chemistry review.",
  lessons: [lesson101, lesson102, lesson103],
};
