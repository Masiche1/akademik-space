import type { Unit } from "../../../types.ts";
import { lesson31 } from "./lesson-3-1.ts";
import { lesson32 } from "./lesson-3-2.ts";
import { lesson33 } from "./lesson-3-3.ts";

export const unit3: Unit = {
  id: "econ-u3",
  code: "3",
  title: "Market Failure and Externalities",
  description: "Sources of market failure — externalities, public goods, information asymmetry and merit/demerit goods; government intervention; and inequality and poverty.",
  lessons: [lesson31, lesson32, lesson33],
};
