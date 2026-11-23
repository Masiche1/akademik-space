import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";

export const unit4: Unit = {
  id: "ecn10-u4",
  code: "4",
  title: "Exchange Rates and the Balance of Payments",
  description:
    "Exchange rate determination and effects, balance of payments accounts, deficits and exchange rate policy.",
  lessons: [lesson41, lesson42, lesson43],
};
