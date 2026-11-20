import type { Unit } from "../../../types.ts";
import { lesson51 } from "./lesson-5-1.ts";
import { lesson52 } from "./lesson-5-2.ts";
import { lesson53 } from "./lesson-5-3.ts";

export const unit5: Unit = {
  id: "olbus-u5",
  code: "5",
  title: "Business Finance",
  description:
    "Sources of finance, cash flow, break-even and financial statements — Cambridge O Level Business 7100.",
  lessons: [lesson51, lesson52, lesson53],
};
