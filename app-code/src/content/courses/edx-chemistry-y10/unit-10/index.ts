import type { Unit } from "../../../types.ts";
import { lesson101 } from "./lesson-10-1.ts";
import { lesson102 } from "./lesson-10-2.ts";
import { lesson103 } from "./lesson-10-3.ts";

export const unit10: Unit = {
  id: "ech10-u10",
  code: "10",
  title: "Organic Chemistry: Alcohols, Acids, Esters and Polymers",
  description:
    "Study alcohol production and reactions, carboxylic acids and esterification, and the formation, uses and disposal of addition and condensation polymers.",
  lessons: [lesson101, lesson102, lesson103],
};
