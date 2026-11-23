import type { Unit } from "../../../types.ts";
import { lesson71 } from "./lesson-7-1.ts";
import { lesson72 } from "./lesson-7-2.ts";
import { lesson73 } from "./lesson-7-3.ts";

export const unit7: Unit = {
  id: "ech10-u7",
  code: "7",
  number: 7,
  title: "Organic Chemistry: Alcohols, Esters and Polymers",
  description:
    "Describe the production and reactions of ethanol, the properties of carboxylic acids and esters, addition polymerisation, and the uses and disposal problems of polymers.",
  lessons: [lesson71, lesson72, lesson73],
};
