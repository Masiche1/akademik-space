import type { Unit } from "../../../types.ts";
import { lesson61 } from "./lesson-6-1.ts";
import { lesson62 } from "./lesson-6-2.ts";
import { lesson63 } from "./lesson-6-3.ts";

export const unit6: Unit = {
  id: "olacc-u6",
  code: "6",
  title: "Control Accounts",
  description:
    "Sales ledger, purchases ledger and cash book control accounts — Cambridge O Level Accounting 7706.",
  lessons: [lesson61, lesson62, lesson63],
};
