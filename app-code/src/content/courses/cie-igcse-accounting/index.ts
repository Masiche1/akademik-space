import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const cieIgcseAccounting: Course = {
  id: "cie-igcse-accounting",
  title: "Cambridge IGCSE Accounting 0452",
  shortTitle: "IGCSE Accounting",
  grade: "IGCSE",
  framework: "Cambridge International",
  description:
    "Introduction to Cambridge IGCSE Accounting 0452: the purpose of accounting, users of accounting information, accounting concepts, books of prime entry, double entry and the trial balance.",
  units: [unit1, unit2, unit3],
  cie: {
    qualification: "igcse",
    subject: "accounting-0452",
  },
};
