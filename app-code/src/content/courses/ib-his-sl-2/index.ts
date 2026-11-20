import type { Course } from "../../types.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const ibHisSl2: Course = {
  id: "ib-his-sl-2",
  title: "IB History SL — Year 2: The 20th Century to the Present",
  shortTitle: "History SL Y2",
  grade: "DP Year 2",
  framework: "IB Diploma Programme",
  description:
    "The Cold War in detail — superpower rivalry, crises and decolonisation — civil rights and social movements, the end of the Cold War, globalisation, terrorism and recent global conflicts.",
  units: [unit4, unit5, unit6],
  ib: { subject: "history", level: "sl", year: 2 },
};
