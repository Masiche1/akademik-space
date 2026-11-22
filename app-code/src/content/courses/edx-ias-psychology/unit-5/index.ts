import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "eias-psych-u5",
  code: "5",
  title: "Research Methods",
  description:
    "9PS01 Unit 5: research design, variables, sampling, data analysis, non-experimental methods, ethics and evaluation.",
  lessons: [lesson51, lesson52, lesson53],
};
