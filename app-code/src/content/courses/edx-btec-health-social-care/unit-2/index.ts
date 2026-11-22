import type { Unit } from "../../../types.ts";
import { lesson201 } from "./lesson-2-1.ts";
import { lesson202 } from "./lesson-2-2.ts";
import { lesson203 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "edxbtechsc-u2",
  code: "2",
  title: "Unit 2: Human Biology and Health",
  description:
    "The structure and function of the human body, the concepts of health, illness and wellbeing, and the lifestyle factors that influence health across the lifespan.",
  lessons: [lesson201, lesson202, lesson203],
};
