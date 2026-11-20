import type { Unit } from "../../../types.ts";
import { lesson21 } from "./lesson-2-1.ts";
import { lesson22 } from "./lesson-2-2.ts";
import { lesson23 } from "./lesson-2-3.ts";

export const unit2: Unit = {
  id: "cieiacct-u2",
  code: "2",
  title: "The Accounting System",
  description:
    "Books of prime entry, ledger accounts, double entry and the trial balance — the mechanics of recording — Cambridge IGCSE Accounting 0452.",
  lessons: [lesson21, lesson22, lesson23],
};
