import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibBusSl1: Course = {
  id: "ib-bus-sl-1",
  title: "Business Management SL: Year 1 — Business Foundations",
  shortTitle: "Business SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "Business aims and stakeholders, types of business organisation, enterprise and entrepreneurship, the marketing mix, market research and operations management, human resource functions, communication and leadership.",
  units: [unit1, unit2, unit3],
  ib: { subject: "business", level: "sl", year: 1 },
};
