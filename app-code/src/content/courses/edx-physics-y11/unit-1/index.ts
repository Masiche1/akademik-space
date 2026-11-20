import type { Unit } from "../../../types.ts";
import { lesson11 } from "./lesson-1-1.ts";
import { lesson12 } from "./lesson-1-2.ts";
import { lesson13 } from "./lesson-1-3.ts";

export const unit1: Unit = {
  id: "eph11-u1",
  code: "1",
  title: "Energy and Solids, Liquids and Gases",
  description: "Study energy stores, transfers and efficiency, work, power and energy equations, thermal energy transfer, density and pressure, specific heat capacity, changes of state and the gas laws.",
  lessons: [lesson11, lesson12, lesson13],
};
