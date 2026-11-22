import type { Course } from "../../types.ts";
import { unit1 } from "./unit-1/index.ts";
import { unit2 } from "./unit-2/index.ts";
import { unit3 } from "./unit-3/index.ts";
import { unit4 } from "./unit-4/index.ts";
import { unit5 } from "./unit-5/index.ts";
import { unit6 } from "./unit-6/index.ts";

export const cieIgcseEconomics: Course = {
  id: "cie-igcse-economics",
  title: "Cambridge IGCSE Economics 0455",
  shortTitle: "IGCSE Economics",
  grade: "IGCSE",
  framework: "Cambridge International",
  description:
    "Comprehensive coverage of Cambridge IGCSE Economics 0455: economic problems, microeconomics, macroeconomics and international trade.",
  units: [unit1, unit2, unit3, unit4, unit5, unit6],
  cie: {
    qualification: "igcse",
    subject: "economics-0455",
  },
};
