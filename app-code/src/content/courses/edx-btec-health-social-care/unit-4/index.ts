import type { Unit } from "../../../types.ts";
import { lesson401 } from "./lesson-4-1.ts";
import { lesson402 } from "./lesson-4-2.ts";
import { lesson403 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "edxbtechsc-u4",
  code: "4",
  title: "Unit 4: Health, Policy and Wellbeing",
  description:
    "Optional unit: UK health policy and legislation, the social determinants of health, and strategies for promoting health and wellbeing at individual and population level.",
  lessons: [lesson401, lesson402, lesson403],
};
