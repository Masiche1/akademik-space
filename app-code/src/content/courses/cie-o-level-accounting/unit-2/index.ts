import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "olacc-u2",
  code: "2",
  title: "Ledger Accounts and the Trial Balance",
  description:
    "Ledger accounts, posting from books of prime entry, the trial balance and error correction — Cambridge O Level Accounting 7706 topic 2.",
  lessons: [lesson21, lesson22, lesson23],
};
