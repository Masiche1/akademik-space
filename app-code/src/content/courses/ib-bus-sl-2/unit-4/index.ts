import type { Unit } from "../../../types.ts";
import { lesson41 } from "./lesson-4-1.ts";
import { lesson42 } from "./lesson-4-2.ts";
import { lesson43 } from "./lesson-4-3.ts";
import { lesson44 } from "./lesson-4-4.ts";

export const unit4: Unit = {
  id: "bus-u4",
  code: "4",
  title: "Finance and Accounting",
  description: "Sources of business finance, financial statements including the balance sheet and profit and loss account, cash-flow forecasts, ratio analysis and break-even analysis.",
  lessons: [lesson41, lesson42, lesson43, lesson44],
};
