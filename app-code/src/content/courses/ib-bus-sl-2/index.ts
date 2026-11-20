import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibBusSl2: Course = {
  id: "ib-bus-sl-2",
  title: "Business Management SL: Year 2 — Finance, HR and Strategy",
  shortTitle: "Business SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "Sources of business finance, accounting statements and cash flow, ratio and break-even analysis, recruitment and selection, training and industrial relations, remuneration and appraisal, strategic planning, business ethics and globalisation.",
  units: [unit4, unit5, unit6],
  ib: { subject: "business", level: "sl", year: 2 },
};
