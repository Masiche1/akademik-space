import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibPsychSl2: Course = {
  id: "ib-psych-sl-2",
  title: "Psychology SL: Year 2 — Social, Abnormal and Applied Psychology",
  shortTitle: "Psychology SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "IB Psychology SL advanced topics: social psychology, abnormal psychology, health psychology, stress and forensic psychology.",
  units: [unit4, unit5, unit6],
  ib: { subject: "psychology", level: "sl", year: 2 },
};
