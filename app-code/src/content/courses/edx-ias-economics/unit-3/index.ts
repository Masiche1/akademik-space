import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "eias-econ-u3",
  code: "3",
  title: "Macroeconomic Performance",
  description:
    "9EC01 Unit 3: economic growth, unemployment, inflation, balance of payments, living standards, objectives and demand management.",
  lessons: [lesson31, lesson32, lesson33],
};
