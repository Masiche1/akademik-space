import type { Unit } from "../../../types.ts";
import { lesson111 } from "./lesson-1-1.ts";
import { lesson112 } from "./lesson-1-2.ts";
import { lesson113 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "cial-c-unit-1",
  code: "1",
  title: "Stoichiometry",
  description:
    "The mole concept, reacting masses, gas volumes, solution concentrations, titrations, percentage purity and water of crystallisation.",
  lessons: [lesson111, lesson112, lesson113],
};
