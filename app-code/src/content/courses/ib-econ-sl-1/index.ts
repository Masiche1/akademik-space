import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibEconSl1: Course = {
  id: "ib-econ-sl-1",
  title: "Economics SL: Year 1 — Markets and Market Failure",
  shortTitle: "Economics SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "The basic economic problem, factors of production and the production possibility frontier; demand, supply, elasticity and market equilibrium; market failure from externalities and public goods; government intervention through taxes, subsidies and regulation; and the measurement and reduction of inequality and poverty.",
  units: [unit1, unit2, unit3],
  ib: { subject: "economics", level: "sl", year: 1 },
};
