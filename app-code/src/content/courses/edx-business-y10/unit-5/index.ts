import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "ebz10-u5",
  code: "5",
  number: 5,
  title: "Finance and Accounting",
  description:
    "Business finance needs, sources of finance, bookkeeping, financial statements, financial ratios and break-even analysis.",
  lessons: [lesson51, lesson52, lesson53],
};
