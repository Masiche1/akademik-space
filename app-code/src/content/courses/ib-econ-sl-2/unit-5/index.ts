import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "econ-u5",
  code: "5",
  title: "Fiscal and Monetary Policy",
  description: "Fiscal policy through government spending and taxation; monetary policy through interest rates, money supply and quantitative easing; policy conflicts and supply-side policies.",
  lessons: [lesson51, lesson52, lesson53],
};
