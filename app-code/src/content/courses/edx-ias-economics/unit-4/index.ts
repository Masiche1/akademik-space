import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "eias-econ-u4",
  code: "4",
  title: "Government Macroeconomic Policy",
  description:
    "9EC01 Unit 4: fiscal policy, monetary policy, supply-side policies and their evaluation.",
  lessons: [lesson41, lesson42, lesson43],
};
