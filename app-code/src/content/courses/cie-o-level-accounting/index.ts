import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";
import { unit7 } from "./unit-7/index.ts";

export const cieOLevelAccounting: Course = {
  id: "cie-o-level-accounting",
  title: "Cambridge O Level Accounting 7706",
  shortTitle: "O Level Accounting",
  grade: "Cambridge O Level",
  framework: "Cambridge International Examinations — Accounting 7706",
  description:
    "Cambridge O Level Accounting 7706 covering the accounting equation, books of prime entry, ledger accounts, trial balance, income statements, balance sheets, incomplete records, control accounts, bank reconciliation and analysis of financial statements.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6, unit7],
  cie: { qualification: "o-level", subject: "accounting-7706" },
};
