import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieIgcseIct: Course = {
  id: "cie-igcse-ict",
  title: "Cambridge IGCSE ICT 0417",
  shortTitle: "IGCSE ICT",
  grade: "Cambridge IGCSE",
  framework: "Cambridge International Examinations — ICT 0417",
  description:
    "Cambridge IGCSE ICT 0417 covering office applications, spreadsheets, databases, web authoring, multimedia, graphics, desktop publishing, collaboration tools, data protection, e-commerce and project evaluation.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: { qualification: "igcse", subject: "ict-0417" },
};
