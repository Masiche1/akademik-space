import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "ech10-u5",
  code: "5",
  number: 5,
  title: "Physical Chemistry",
  description:
    "Explain rates of reaction with collision theory, classify exothermic and endothermic reactions, describe reversible reactions and equilibrium, and predict the products of electrolysis including industrial uses.",
  lessons: [lesson51, lesson52, lesson53],
};
