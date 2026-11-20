import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";

export const ibPsychSl1: Course = {
  id: "ib-psych-sl-1",
  title: "Psychology SL: Year 1 — Foundations",
  shortTitle: "Psychology SL Y1",
  grade: "DP Year 1",
  framework: "IB Diploma Programme",
  description:
    "IB Psychology SL foundations: research methods, ethics and statistics; the nervous system and brain; memory, perception and cognitive development; learning, motivation and emotion.",
  units: [unit1, unit2, unit3],
  ib: { subject: "psychology", level: "sl", year: 1 },
};
