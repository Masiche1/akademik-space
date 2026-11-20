import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "mypc4-unit-2",
  number: 2,
  code: "2",
  title: "Chemical Reactions",
  description:
    "Balancing equations, reactivity series, acids and bases, neutralisation, rates of reaction and mole calculations.",
  lessons: [lesson21, lesson22, lesson23],
};
