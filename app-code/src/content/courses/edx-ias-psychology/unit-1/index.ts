import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "eias-psych-u1",
  code: "1",
  title: "Social Influence",
  description:
    "9PS01 Unit 1: conformity, obedience, minority influence, social roles, resistance, social identity and cultural differences.",
  lessons: [lesson11, lesson12, lesson13],
};
