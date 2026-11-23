import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";

export const unit1: Unit = {
  id: "aphg-u1",
  code: "1",
  title: "Population and Migration",
  description: "Population dynamics, migration patterns, and demographic transition.",
  lessons: [lesson11, lesson12],
};
