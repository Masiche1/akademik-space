import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibEconSl2: Course = {
  id: "ib-econ-sl-2",
  title: "Economics SL: Year 2 — Macroeconomics and the Global Economy",
  shortTitle: "Economics SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "National income accounting, inflation and unemployment; fiscal and monetary policy and their conflicts; supply-side policies; economic growth theories; development economics including the HDI, aid and microfinance; and globalisation, trade, multinational corporations and protectionism.",
  units: [unit4, unit5, unit6],
  ib: { subject: "economics", level: "sl", year: 2 },
};
