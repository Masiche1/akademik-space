import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";
import { lesson54 } from "./lesson-5-4.ts";
import { lesson55 } from "./lesson-5-5.ts";

export const unit5: Unit = {
  id: "cieale-u5",
  code: "5",
  title: "Advanced Microeconomics",
  description:
    "Game theory, labour economics, information economics, welfare analysis, behavioural economics, contestable markets, externalities, public goods and long-run costs — Cambridge A Level Economics 9708.",
  lessons: [lesson51, lesson52, lesson53, lesson54, lesson55],
};
